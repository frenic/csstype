import { getAtRules } from './collections/at-rules';
import { getHtmlAttributes, getSvgAttributes } from './collections/attributes';
import { getDataTypesOf } from './collections/data-types';
import { getGlobals, getHtmlProperties, getSvgProperties, isVendorProperty } from './collections/properties';
import { getPseudos } from './collections/selectors';
import { IDataType, Type, TypeType } from './syntax/typer';
import { toCamelCase, toPascalCase, toVendorPrefixCase } from './utils/casing';

export interface IAlias {
  type: Type.Alias;
  name: string;
  generics: IGenerics[];
  namespace: INamespace | undefined;
}

export interface IGenerics {
  name: string;
  defaults?: SimpleType[];
  extend?: string;
}

export interface IInterface {
  name: string;
  generics: IGenerics[];
  extends: IInterface[];
  export: boolean;
  fallback: boolean;
  properties: PropertyType[];
}

interface IPropertyAlias {
  name: string;
  generics: IGenerics[];
  alias: IAlias;
  comment: () => Promise<string | undefined>;
  namespace: INamespace | undefined;
}

interface IPropertyType {
  name: string;
  type: DeclarableType;
  comment: () => Promise<string | undefined>;
}

type PropertyType = IPropertyAlias | IPropertyType;

type MixedType = TypeType<IDataType<Type.DataType> | IAlias>;
export type DeclarableType = TypeType<IAlias>;
export type SimpleType = Exclude<DeclarableType, IAlias>;

export interface INamespace {
  name: string;
  export: boolean;
  body: () => Array<IInterface | IDeclaration>;
}

export interface IDeclaration {
  name: string;
  export: boolean;
  types: DeclarableType[];
  generics: IGenerics[];
  namespace: INamespace | undefined;
}

const lengthGeneric: IGenerics = {
  name: 'TLength',
  defaults: [{ type: Type.String }, { type: Type.NumericLiteral, literal: 0 }],
};

export async function declarator(minTypesInDataTypes: number) {
  const [
    dataTypes,
    [htmlProperties, svgProperties, atRules, globals, pseudos, htmlAttributes, svgAttributes],
  ] = await getDataTypesOf(dictionary =>
    Promise.all([
      getHtmlProperties(dictionary, minTypesInDataTypes),
      getSvgProperties(dictionary, minTypesInDataTypes),
      getAtRules(dictionary, minTypesInDataTypes),
      getGlobals(dictionary, minTypesInDataTypes),
      getPseudos(),
      getHtmlAttributes(),
      getSvgAttributes(),
    ]),
  );

  function lengthIn(types: MixedType[]): boolean {
    return !types.every(type => {
      switch (type.type) {
        case Type.Length:
          return false;
        case Type.DataType:
          return !(type.name in dataTypes && lengthIn(dataTypes[type.name]));
        default:
          return true;
      }
    });
  }

  function alias(name: string, types?: MixedType[], namespace?: INamespace): IAlias {
    return {
      type: Type.Alias,
      name,
      generics: types && lengthIn(types) ? [lengthGeneric] : [],
      namespace,
    };
  }

  function aliasOf({ name, types, namespace }: IDeclaration): IAlias {
    return alias(name, types, namespace);
  }

  function declarable(types: MixedType[]): DeclarableType[] {
    return types.sort(sorter).map<DeclarableType>(type => {
      switch (type.type) {
        case Type.DataType:
          return type.name in dataTypes
            ? alias(toPascalCase(type.name), dataTypes[type.name], dataTypeNamespace)
            : alias(toPascalCase(type.name));
        default:
          return type;
      }
    });
  }

  const globalDeclarations: Map<MixedType[], IDeclaration> = new Map();

  function declarationNameExists(
    map: Map<Array<TypeType<IDataType<Type.DataType> | IAlias>>, IDeclaration>,
    name: string,
  ) {
    for (const declaration of map.values()) {
      if (declaration.name === name) {
        return true;
      }
    }

    return false;
  }

  const atRuleDeclaration: IDeclaration = {
    name: 'AtRules',
    export: true,
    types: declarable(atRules.literals),
    generics: [],
    namespace: undefined,
  };

  globalDeclarations.set(atRules.literals, atRuleDeclaration);

  const advancedPseudosDeclaration: IDeclaration = {
    name: 'AdvancedPseudos',
    export: true,
    types: declarable(pseudos.advanced),
    generics: [],
    namespace: undefined,
  };

  globalDeclarations.set(pseudos.advanced, advancedPseudosDeclaration);

  const simplePseudosDeclaration: IDeclaration = {
    name: 'SimplePseudos',
    export: true,
    types: declarable(pseudos.simple),
    generics: [],
    namespace: undefined,
  };

  globalDeclarations.set(pseudos.simple, simplePseudosDeclaration);

  const pseudoAliases = [aliasOf(advancedPseudosDeclaration), aliasOf(simplePseudosDeclaration)];

  const pseudosDeclaration: IDeclaration = {
    name: 'Pseudos',
    export: true,
    types: pseudoAliases,
    generics: [],
    namespace: undefined,
  };

  globalDeclarations.set(pseudoAliases, pseudosDeclaration);

  const htmlAttributesDeclaration: IDeclaration = {
    name: 'HtmlAttributes',
    export: true,
    types: declarable(htmlAttributes),
    generics: [],
    namespace: undefined,
  };

  globalDeclarations.set(htmlAttributes, htmlAttributesDeclaration);

  const svgAttributesDeclaration: IDeclaration = {
    name: 'SvgAttributes',
    export: true,
    types: declarable(svgAttributes),
    generics: [],
    namespace: undefined,
  };

  globalDeclarations.set(svgAttributes, svgAttributesDeclaration);

  const globalsDeclaration: IDeclaration = {
    name: 'Globals',
    export: true,
    types: declarable(globals),
    generics: [],
    namespace: undefined,
  };

  globalDeclarations.set(globals, globalsDeclaration);

  const standardLonghandPropertiesDefinition: IPropertyAlias[] = [];
  const standardShorthandPropertiesDefinition: IPropertyAlias[] = [];
  const standardLonghandPropertiesHyphenDefinition: IPropertyAlias[] = [];
  const standardShorthandPropertiesHyphenDefinition: IPropertyAlias[] = [];
  const vendorLonghandPropertiesDefinition: IPropertyAlias[] = [];
  const vendorShorthandPropertiesDefinition: IPropertyAlias[] = [];
  const vendorLonghandPropertiesHyphenDefinition: IPropertyAlias[] = [];
  const vendorShorthandPropertiesHyphenDefinition: IPropertyAlias[] = [];
  const obsoletePropertiesDefinition: IPropertyAlias[] = [];
  const obsoletePropertiesHyphenDefinition: IPropertyAlias[] = [];
  const svgPropertiesDefinition: IPropertyAlias[] = [];
  const svgPropertiesHyphenDefinition: IPropertyAlias[] = [];

  const propertyDeclarations: Map<MixedType[], IDeclaration> = new Map();
  const dataTypeDeclarations: Map<MixedType[], IDeclaration> = new Map();

  const propertyNamespace: INamespace = {
    name: 'Property',
    export: true,
    body: () => Array.from(propertyDeclarations.values()),
  };
  const dataTypeNamespace: INamespace = {
    name: 'DataType',
    export: false,
    body: () => Array.from(dataTypeDeclarations.values()),
  };

  function toPropertyDeclarationName(name: string) {
    return toPascalCase(name);
  }

  for (const properties of [htmlProperties, svgProperties]) {
    // Sort alphabetical, starting with standard properties
    const propertyNames = ([] as string[]).concat(
      Object.keys(properties)
        .filter(name => name[0] !== '-')
        .sort(),
      Object.keys(properties)
        .filter(name => name[0] === '-')
        .sort(),
    );

    for (const name of propertyNames) {
      const property = properties[name];
      let definitions: IPropertyAlias[];
      let hyphenDefinitions: IPropertyAlias[];

      if (properties === svgProperties) {
        definitions = svgPropertiesDefinition;
        hyphenDefinitions = svgPropertiesHyphenDefinition;
      } else if (property.obsolete) {
        definitions = obsoletePropertiesDefinition;
        hyphenDefinitions = obsoletePropertiesHyphenDefinition;
      } else if (property.vendor) {
        if (property.shorthand) {
          definitions = vendorShorthandPropertiesDefinition;
          hyphenDefinitions = vendorShorthandPropertiesHyphenDefinition;
        } else {
          definitions = vendorLonghandPropertiesDefinition;
          hyphenDefinitions = vendorLonghandPropertiesHyphenDefinition;
        }
      } else {
        if (property.shorthand) {
          definitions = standardShorthandPropertiesDefinition;
          hyphenDefinitions = standardShorthandPropertiesHyphenDefinition;
        } else {
          definitions = standardLonghandPropertiesDefinition;
          hyphenDefinitions = standardLonghandPropertiesHyphenDefinition;
        }
      }

      const generics = lengthIn(property.types) ? [lengthGeneric] : [];

      // Some properties are prefixed and share the same type so we
      // make sure to reuse the same declaration of that type
      let declaration = propertyDeclarations.get(property.types);

      if (!declaration) {
        const declarationName = toPropertyDeclarationName(property.name);

        declaration = {
          name: declarationName,
          export: true,
          types: [aliasOf(globalsDeclaration), ...declarable(property.types)],
          generics,
          namespace: propertyNamespace,
        };

        // Some SVG properties are shared with regular style properties
        // and we assume here that they are identical
        if (!declarationNameExists(propertyDeclarations, declarationName)) {
          propertyDeclarations.set(property.types, declaration);
        }
      }

      definitions.push({
        name: property.vendor ? toVendorPrefixCase(name) : toCamelCase(name),
        generics,
        alias: aliasOf(declaration),
        comment: property.comment,
        namespace: declaration.namespace,
      });
      hyphenDefinitions.push({
        name,
        generics,
        alias: aliasOf(declaration),
        comment: property.comment,
        namespace: declaration.namespace,
      });
    }
  }

  const atRuleDefinitions: { [name: string]: PropertyType[] } = {};
  const atRuleHyphenDefinitions: { [name: string]: PropertyType[] } = {};
  const atRuleDeclarations: Map<MixedType[], IDeclaration> = new Map();
  const atRuleInterfaces: IInterface[] = [];
  const atRuleNamespace: INamespace = {
    name: 'AtRule',
    export: true,
    body: () => [...atRuleInterfaces, ...Array.from(atRuleDeclarations.values())],
  };

  for (const name of Object.keys(atRules.rules).sort()) {
    atRuleDefinitions[name] = [];
    atRuleHyphenDefinitions[name] = [];

    for (const property of Object.keys(atRules.rules[name]).sort()) {
      const descriptor = atRules.rules[name][property];
      const types = descriptor.types;
      const generics = lengthIn(types) ? [lengthGeneric] : [];

      if (onlyContainsString(types) || onlyContainsNumber(types)) {
        const type: DeclarableType = {
          type: onlyContainsString(types) ? Type.String : Type.Number,
        };

        atRuleDefinitions[name].push({
          name: isVendorProperty(property) ? toVendorPrefixCase(property) : toCamelCase(property),
          type,
          comment: () => Promise.resolve(undefined),
        });
        atRuleHyphenDefinitions[name].push({
          name: property,
          type,
          comment: () => Promise.resolve(undefined),
        });
      } else {
        // Some properties are prefixed and share the same type so we
        // make sure to reuse the same declaration of that type
        let declaration = atRuleDeclarations.get(types);

        if (!declaration) {
          declaration = {
            name: toPropertyDeclarationName(descriptor.name),
            export: false,
            types: declarable(types),
            generics,
            namespace: atRuleNamespace,
          };

          atRuleDeclarations.set(types, declaration);
        }

        atRuleDefinitions[name].push({
          name: isVendorProperty(property) ? toVendorPrefixCase(property) : toCamelCase(property),
          generics,
          alias: aliasOf(declaration),
          comment: () => Promise.resolve(undefined),
          namespace: atRuleNamespace,
        });
        atRuleHyphenDefinitions[name].push({
          name: property,
          generics,
          alias: aliasOf(declaration),
          comment: () => Promise.resolve(undefined),
          namespace: atRuleNamespace,
        });
      }
    }
  }

  // Loop in alphabetical order
  for (const name of Object.keys(dataTypes).sort()) {
    const declarableDataType = declarable(dataTypes[name]);
    dataTypeDeclarations.set(declarableDataType, {
      name: toPascalCase(name),
      export: false,
      types: declarableDataType,
      generics: lengthIn(dataTypes[name]) ? [lengthGeneric] : [],
      namespace: dataTypeNamespace,
    });
  }

  const PROPERTIES = 'Properties';
  const LONGHAND = 'Longhand';
  const SHORTHAND = 'Shorthand';
  const STANDARD = 'Standard';
  const INTERFACE_STANDARD_LONGHAND_PROPERTIES = STANDARD + LONGHAND + PROPERTIES;
  const INTERFACE_STANDARD_SHORTHAND_PROPERTIES = STANDARD + SHORTHAND + PROPERTIES;
  const INTERFACE_STANDARD_PROPERTIES = STANDARD + PROPERTIES;
  const VENDOR = 'Vendor';
  const INTERFACE_VENDOR_LONGHAND_PROPERTIES = VENDOR + LONGHAND + PROPERTIES;
  const INTERFACE_VENDOR_SHORTHAND_PROPERTIES = VENDOR + SHORTHAND + PROPERTIES;
  const INTERFACE_VENDOR_PROPERTIES = VENDOR + PROPERTIES;
  const OBSOLETE = 'Obsolete';
  const INTERFACE_OBSOLETE_PROPERTIES = OBSOLETE + PROPERTIES;
  const SVG = 'Svg';
  const INTERFACE_SVG_PROPERTIES = SVG + PROPERTIES;
  const INTERFACE_ALL_PROPERTIES = PROPERTIES;
  const HYPHEN = 'Hyphen';
  const INTERFACE_STANDARD_LONGHAND_PROPERTIES_HYPHEN = INTERFACE_STANDARD_LONGHAND_PROPERTIES + HYPHEN;
  const INTERFACE_STANDARD_SHORTHAND_PROPERTIES_HYPHEN = INTERFACE_STANDARD_SHORTHAND_PROPERTIES + HYPHEN;
  const INTERFACE_STANDARD_PROPERTIES_HYPHEN = INTERFACE_STANDARD_PROPERTIES + HYPHEN;
  const INTERFACE_VENDOR_LONGHAND_PROPERTIES_HYPHEN = INTERFACE_VENDOR_LONGHAND_PROPERTIES + HYPHEN;
  const INTERFACE_VENDOR_SHORTHAND_PROPERTIES_HYPHEN = INTERFACE_VENDOR_SHORTHAND_PROPERTIES + HYPHEN;
  const INTERFACE_VENDOR_PROPERTIES_HYPHEN = INTERFACE_VENDOR_PROPERTIES + HYPHEN;
  const INTERFACE_OBSOLETE_PROPERTIES_HYPHEN = INTERFACE_OBSOLETE_PROPERTIES + HYPHEN;
  const INTERFACE_SVG_PROPERTIES_HYPHEN = INTERFACE_SVG_PROPERTIES + HYPHEN;
  const INTERFACE_ALL_PROPERTIES_HYPHEN = INTERFACE_ALL_PROPERTIES + HYPHEN;
  const FALLBACK = 'Fallback';
  const INTERFACE_STANDARD_LONGHAND_PROPERTIES_FALLBACK = INTERFACE_STANDARD_LONGHAND_PROPERTIES + FALLBACK;
  const INTERFACE_STANDARD_SHORTHAND_PROPERTIES_FALLBACK = INTERFACE_STANDARD_SHORTHAND_PROPERTIES + FALLBACK;
  const INTERFACE_STANDARD_PROPERTIES_FALLBACK = INTERFACE_STANDARD_PROPERTIES + FALLBACK;
  const INTERFACE_VENDOR_LONGHAND_PROPERTIES_FALLBACK = INTERFACE_VENDOR_LONGHAND_PROPERTIES + FALLBACK;
  const INTERFACE_VENDOR_SHORTHAND_PROPERTIES_FALLBACK = INTERFACE_VENDOR_SHORTHAND_PROPERTIES + FALLBACK;
  const INTERFACE_VENDOR_PROPERTIES_FALLBACK = INTERFACE_VENDOR_PROPERTIES + FALLBACK;
  const INTERFACE_OBSOLETE_PROPERTIES_FALLBACK = INTERFACE_OBSOLETE_PROPERTIES + FALLBACK;
  const INTERFACE_SVG_PROPERTIES_FALLBACK = INTERFACE_SVG_PROPERTIES + FALLBACK;
  const INTERFACE_ALL_PROPERTIES_FALLBACK = INTERFACE_ALL_PROPERTIES + FALLBACK;
  const INTERFACE_STANDARD_LONGHAND_PROPERTIES_HYPHEN_FALLBACK =
    INTERFACE_STANDARD_LONGHAND_PROPERTIES + HYPHEN + FALLBACK;
  const INTERFACE_STANDARD_SHORTHAND_PROPERTIES_HYPHEN_FALLBACK =
    INTERFACE_STANDARD_SHORTHAND_PROPERTIES + HYPHEN + FALLBACK;
  const INTERFACE_STANDARD_PROPERTIES_HYPHEN_FALLBACK = INTERFACE_STANDARD_PROPERTIES + HYPHEN + FALLBACK;
  const INTERFACE_VENDOR_LONGHAND_PROPERTIES_HYPHEN_FALLBACK = INTERFACE_VENDOR_LONGHAND_PROPERTIES + HYPHEN + FALLBACK;
  const INTERFACE_VENDOR_SHORTHAND_PROPERTIES_HYPHEN_FALLBACK =
    INTERFACE_VENDOR_SHORTHAND_PROPERTIES + HYPHEN + FALLBACK;
  const INTERFACE_VENDOR_PROPERTIES_HYPHEN_FALLBACK = INTERFACE_VENDOR_PROPERTIES + HYPHEN + FALLBACK;
  const INTERFACE_OBSOLETE_PROPERTIES_HYPHEN_FALLBACK = INTERFACE_OBSOLETE_PROPERTIES + HYPHEN + FALLBACK;
  const INTERFACE_SVG_PROPERTIES_HYPHEN_FALLBACK = INTERFACE_SVG_PROPERTIES + HYPHEN + FALLBACK;
  const INTERFACE_ALL_PROPERTIES_HYPHEN_FALLBACK = INTERFACE_ALL_PROPERTIES + HYPHEN + FALLBACK;

  const standardLonghandPropertiesGenerics = genericsOf(standardLonghandPropertiesDefinition);
  const standardShorthandPropertiesGenerics = genericsOf(standardShorthandPropertiesDefinition);
  const standardPropertiesGenerics = genericsOf([
    ...standardLonghandPropertiesDefinition,
    ...standardShorthandPropertiesDefinition,
  ]);
  const vendorLonghandPropertiesGenerics = genericsOf(vendorLonghandPropertiesDefinition);
  const vendorShorthandPropertiesGenerics = genericsOf(vendorShorthandPropertiesDefinition);
  const vendorPropertiesGenerics = genericsOf([
    ...vendorLonghandPropertiesDefinition,
    ...vendorShorthandPropertiesDefinition,
  ]);
  const obsoletePropertiesGenerics = genericsOf(obsoletePropertiesDefinition);
  const svgPropertiesGenerics = genericsOf(svgPropertiesDefinition);
  const allPropertiesGenerics = genericsOf([
    ...standardLonghandPropertiesDefinition,
    ...standardShorthandPropertiesDefinition,
    ...vendorLonghandPropertiesDefinition,
    ...vendorShorthandPropertiesDefinition,
    ...obsoletePropertiesDefinition,
    ...svgPropertiesDefinition,
  ]);

  const standardLonghandPropertiesInterface: IInterface = {
    name: INTERFACE_STANDARD_LONGHAND_PROPERTIES,
    generics: standardLonghandPropertiesGenerics,
    extends: [],
    export: true,
    fallback: false,
    properties: standardLonghandPropertiesDefinition,
  };

  const standardShorthandPropertiesInterface: IInterface = {
    name: INTERFACE_STANDARD_SHORTHAND_PROPERTIES,
    generics: standardShorthandPropertiesGenerics,
    extends: [],
    export: true,
    fallback: false,
    properties: standardShorthandPropertiesDefinition,
  };

  const standardPropertiesInterface: IInterface = {
    name: INTERFACE_STANDARD_PROPERTIES,
    generics: standardPropertiesGenerics,
    extends: [standardLonghandPropertiesInterface, standardShorthandPropertiesInterface],
    export: true,
    fallback: false,
    properties: [],
  };

  const vendorLonghandPropertiesInterface: IInterface = {
    name: INTERFACE_VENDOR_LONGHAND_PROPERTIES,
    generics: vendorLonghandPropertiesGenerics,
    extends: [],
    export: true,
    fallback: false,
    properties: vendorLonghandPropertiesDefinition,
  };

  const vendorShorthandPropertiesInterface: IInterface = {
    name: INTERFACE_VENDOR_SHORTHAND_PROPERTIES,
    generics: vendorShorthandPropertiesGenerics,
    extends: [],
    export: true,
    fallback: false,
    properties: vendorShorthandPropertiesDefinition,
  };

  const vendorPropertiesInterface: IInterface = {
    name: INTERFACE_VENDOR_PROPERTIES,
    generics: vendorPropertiesGenerics,
    extends: [vendorLonghandPropertiesInterface, vendorShorthandPropertiesInterface],
    export: true,
    fallback: false,
    properties: [],
  };

  const obsoletePropertiesInterface: IInterface = {
    name: INTERFACE_OBSOLETE_PROPERTIES,
    generics: obsoletePropertiesGenerics,
    extends: [],
    export: true,
    fallback: false,
    properties: obsoletePropertiesDefinition,
  };

  const svgPropertiesInterface: IInterface = {
    name: INTERFACE_SVG_PROPERTIES,
    generics: svgPropertiesGenerics,
    extends: [],
    export: true,
    fallback: false,
    properties: svgPropertiesDefinition,
  };

  const allPropertiesInterface: IInterface = {
    name: INTERFACE_ALL_PROPERTIES,
    generics: allPropertiesGenerics,
    extends: [
      standardPropertiesInterface,
      vendorPropertiesInterface,
      obsoletePropertiesInterface,
      svgPropertiesInterface,
    ],
    export: true,
    fallback: false,
    properties: [],
  };

  const standardLonghandPropertiesHyphenInterface: IInterface = {
    name: INTERFACE_STANDARD_LONGHAND_PROPERTIES_HYPHEN,
    generics: standardLonghandPropertiesGenerics,
    extends: [],
    export: true,
    fallback: false,
    properties: standardLonghandPropertiesHyphenDefinition,
  };

  const standardShorthandPropertiesHyphenInterface: IInterface = {
    name: INTERFACE_STANDARD_SHORTHAND_PROPERTIES_HYPHEN,
    generics: standardShorthandPropertiesGenerics,
    extends: [],
    export: true,
    fallback: false,
    properties: standardShorthandPropertiesHyphenDefinition,
  };

  const standardPropertiesHyphenInterface: IInterface = {
    name: INTERFACE_STANDARD_PROPERTIES_HYPHEN,
    generics: standardPropertiesGenerics,
    extends: [standardLonghandPropertiesHyphenInterface, standardShorthandPropertiesHyphenInterface],
    export: true,
    fallback: false,
    properties: [],
  };

  const vendorLonghandPropertiesHyphenInterface: IInterface = {
    name: INTERFACE_VENDOR_LONGHAND_PROPERTIES_HYPHEN,
    generics: vendorLonghandPropertiesGenerics,
    extends: [],
    export: true,
    fallback: false,
    properties: vendorLonghandPropertiesHyphenDefinition,
  };

  const vendorShorthandPropertiesHyphenInterface: IInterface = {
    name: INTERFACE_VENDOR_SHORTHAND_PROPERTIES_HYPHEN,
    generics: vendorShorthandPropertiesGenerics,
    extends: [],
    export: true,
    fallback: false,
    properties: vendorShorthandPropertiesHyphenDefinition,
  };

  const vendorPropertiesHyphenInterface: IInterface = {
    name: INTERFACE_VENDOR_PROPERTIES_HYPHEN,
    generics: vendorPropertiesGenerics,
    extends: [vendorLonghandPropertiesHyphenInterface, vendorShorthandPropertiesHyphenInterface],
    export: true,
    fallback: false,
    properties: [],
  };

  const obsoletePropertiesHyphenInterface: IInterface = {
    name: INTERFACE_OBSOLETE_PROPERTIES_HYPHEN,
    generics: obsoletePropertiesGenerics,
    extends: [],
    export: true,
    fallback: false,
    properties: obsoletePropertiesHyphenDefinition,
  };

  const svgPropertiesHyphenInterface: IInterface = {
    name: INTERFACE_SVG_PROPERTIES_HYPHEN,
    generics: svgPropertiesGenerics,
    extends: [],
    export: true,
    fallback: false,
    properties: svgPropertiesHyphenDefinition,
  };

  const allPropertiesHyphenInterface: IInterface = {
    name: INTERFACE_ALL_PROPERTIES_HYPHEN,
    generics: allPropertiesGenerics,
    extends: [
      standardPropertiesHyphenInterface,
      vendorPropertiesHyphenInterface,
      obsoletePropertiesHyphenInterface,
      svgPropertiesHyphenInterface,
    ],
    export: true,
    fallback: false,
    properties: [],
  };

  const standardLongformPropertiesFallbackInterface: IInterface = {
    ...standardLonghandPropertiesInterface,
    name: INTERFACE_STANDARD_LONGHAND_PROPERTIES_FALLBACK,
    export: true,
    fallback: true,
  };

  const standardShorthandPropertiesFallbackInterface: IInterface = {
    ...standardShorthandPropertiesInterface,
    name: INTERFACE_STANDARD_SHORTHAND_PROPERTIES_FALLBACK,
    export: true,
    fallback: true,
  };

  const standardPropertiesFallbackInterface: IInterface = {
    ...standardPropertiesInterface,
    name: INTERFACE_STANDARD_PROPERTIES_FALLBACK,
    extends: [standardLongformPropertiesFallbackInterface, standardShorthandPropertiesFallbackInterface],
    export: true,
    fallback: true,
  };

  const vendorLonghandPropertiesFallbackInterface: IInterface = {
    ...vendorLonghandPropertiesInterface,
    name: INTERFACE_VENDOR_LONGHAND_PROPERTIES_FALLBACK,
    export: true,
    fallback: true,
  };

  const vendorShorthandPropertiesFallbackInterface: IInterface = {
    ...vendorShorthandPropertiesInterface,
    name: INTERFACE_VENDOR_SHORTHAND_PROPERTIES_FALLBACK,
    export: true,
    fallback: true,
  };

  const vendorPropertiesFallbackInterface: IInterface = {
    ...vendorPropertiesInterface,
    name: INTERFACE_VENDOR_PROPERTIES_FALLBACK,
    extends: [vendorLonghandPropertiesFallbackInterface, vendorShorthandPropertiesFallbackInterface],
    export: true,
    fallback: true,
  };

  const obsoletePropertiesFallbackInterface: IInterface = {
    ...obsoletePropertiesInterface,
    name: INTERFACE_OBSOLETE_PROPERTIES_FALLBACK,
    export: true,
    fallback: true,
  };

  const svgPropertiesFallbackInterface: IInterface = {
    ...svgPropertiesInterface,
    name: INTERFACE_SVG_PROPERTIES_FALLBACK,
    export: true,
    fallback: true,
  };

  const allPropertiesFallbackInterface: IInterface = {
    ...allPropertiesInterface,
    name: INTERFACE_ALL_PROPERTIES_FALLBACK,
    extends: [
      standardPropertiesFallbackInterface,
      vendorPropertiesFallbackInterface,
      obsoletePropertiesFallbackInterface,
      svgPropertiesFallbackInterface,
    ],
    export: true,
    fallback: true,
  };

  const standardLongformPropertiesHyphenFallbackInterface: IInterface = {
    ...standardLonghandPropertiesHyphenInterface,
    name: INTERFACE_STANDARD_LONGHAND_PROPERTIES_HYPHEN_FALLBACK,
    export: true,
    fallback: true,
  };

  const standardShorthandPropertiesHyphenFallbackInterface: IInterface = {
    ...standardShorthandPropertiesHyphenInterface,
    name: INTERFACE_STANDARD_SHORTHAND_PROPERTIES_HYPHEN_FALLBACK,
    export: true,
    fallback: true,
  };

  const standardPropertiesHyphenFallbackInterface: IInterface = {
    ...standardPropertiesHyphenInterface,
    name: INTERFACE_STANDARD_PROPERTIES_HYPHEN_FALLBACK,
    extends: [standardLongformPropertiesHyphenFallbackInterface, standardShorthandPropertiesHyphenFallbackInterface],
    export: true,
    fallback: true,
  };

  const vendorLonghandPropertiesHyphenFallbackInterface: IInterface = {
    ...vendorLonghandPropertiesHyphenInterface,
    name: INTERFACE_VENDOR_LONGHAND_PROPERTIES_HYPHEN_FALLBACK,
    export: true,
    fallback: true,
  };

  const vendorShorthandPropertiesHyphenFallbackInterface: IInterface = {
    ...vendorShorthandPropertiesHyphenInterface,
    name: INTERFACE_VENDOR_SHORTHAND_PROPERTIES_HYPHEN_FALLBACK,
    export: true,
    fallback: true,
  };

  const vendorPropertiesHyphenFallbackInterface: IInterface = {
    ...vendorPropertiesHyphenInterface,
    name: INTERFACE_VENDOR_PROPERTIES_HYPHEN_FALLBACK,
    extends: [vendorLonghandPropertiesHyphenFallbackInterface, vendorShorthandPropertiesHyphenFallbackInterface],
    export: true,
    fallback: true,
  };

  const obsoletePropertiesHyphenFallbackInterface: IInterface = {
    ...obsoletePropertiesHyphenInterface,
    name: INTERFACE_OBSOLETE_PROPERTIES_HYPHEN_FALLBACK,
    export: true,
    fallback: true,
  };

  const svgPropertiesHyphenFallbackInterface: IInterface = {
    ...svgPropertiesHyphenInterface,
    name: INTERFACE_SVG_PROPERTIES_HYPHEN_FALLBACK,
    export: true,
    fallback: true,
  };

  const allPropertiesHyphenFallbackInterface: IInterface = {
    ...allPropertiesHyphenInterface,
    name: INTERFACE_ALL_PROPERTIES_HYPHEN_FALLBACK,
    extends: [
      standardPropertiesHyphenFallbackInterface,
      vendorPropertiesHyphenFallbackInterface,
      obsoletePropertiesHyphenFallbackInterface,
      svgPropertiesHyphenFallbackInterface,
    ],
    export: true,
    fallback: true,
  };

  // Loop in alphabetical order
  for (const name of Object.keys(atRuleDefinitions).sort()) {
    const pascalName = toPascalCase(name);
    const generics = genericsOf(atRuleDefinitions[name].filter(isAliasProperty));
    atRuleInterfaces.push(
      {
        name: pascalName,
        generics,
        extends: [],
        fallback: false,
        export: true,
        properties: atRuleDefinitions[name],
      },
      {
        name: pascalName + HYPHEN,
        generics,
        extends: [],
        fallback: false,
        export: true,
        properties: atRuleHyphenDefinitions[name],
      },
      {
        name: pascalName + FALLBACK,
        generics,
        extends: [],
        fallback: true,
        export: true,
        properties: atRuleDefinitions[name],
      },
      {
        name: pascalName + HYPHEN + FALLBACK,
        generics,
        extends: [],
        fallback: true,
        export: true,
        properties: atRuleHyphenDefinitions[name],
      },
    );
  }

  const interfaces = [
    standardLonghandPropertiesInterface,
    standardShorthandPropertiesInterface,
    standardPropertiesInterface,
    vendorLonghandPropertiesInterface,
    vendorShorthandPropertiesInterface,
    vendorPropertiesInterface,
    obsoletePropertiesInterface,
    svgPropertiesInterface,
    allPropertiesInterface,
    standardLonghandPropertiesHyphenInterface,
    standardShorthandPropertiesHyphenInterface,
    standardPropertiesHyphenInterface,
    vendorLonghandPropertiesHyphenInterface,
    vendorShorthandPropertiesHyphenInterface,
    vendorPropertiesHyphenInterface,
    obsoletePropertiesHyphenInterface,
    svgPropertiesHyphenInterface,
    allPropertiesHyphenInterface,
    standardLongformPropertiesFallbackInterface,
    standardShorthandPropertiesFallbackInterface,
    standardPropertiesFallbackInterface,
    vendorLonghandPropertiesFallbackInterface,
    vendorShorthandPropertiesFallbackInterface,
    vendorPropertiesFallbackInterface,
    obsoletePropertiesFallbackInterface,
    svgPropertiesFallbackInterface,
    allPropertiesFallbackInterface,
    standardLongformPropertiesHyphenFallbackInterface,
    standardShorthandPropertiesHyphenFallbackInterface,
    standardPropertiesHyphenFallbackInterface,
    vendorLonghandPropertiesHyphenFallbackInterface,
    vendorShorthandPropertiesHyphenFallbackInterface,
    vendorPropertiesHyphenFallbackInterface,
    obsoletePropertiesHyphenFallbackInterface,
    svgPropertiesHyphenFallbackInterface,
    allPropertiesHyphenFallbackInterface,
  ];

  const namespaces: INamespace[] = [propertyNamespace, atRuleNamespace, dataTypeNamespace];

  return { declarations: Array.from(globalDeclarations.values()), interfaces, namespaces };
}

export function isAliasProperty(value: PropertyType): value is IPropertyAlias {
  return 'alias' in value;
}

function sorter(a: MixedType, b: MixedType) {
  if (a.type === Type.StringLiteral && b.type === Type.StringLiteral) {
    return a.literal < b.literal ? -1 : a.literal > b.literal ? 1 : 0;
  }
  if (a.type === Type.NumericLiteral && b.type === Type.NumericLiteral) {
    return a.literal - b.literal;
  }
  return a.type - b.type;
}

function genericsOf(definitions: IPropertyAlias[]) {
  return Array.from(new Set(([] as IGenerics[]).concat(...definitions.map(definition => definition.generics))));
}

function onlyContainsString(types: MixedType[]) {
  return types.length === 1 && types[0].type === Type.String;
}

function onlyContainsNumber(types: MixedType[]) {
  return types.length === 1 && types[0].type === Type.Number;
}
