import { getAtRules } from './at-rules';
import { getHtmlAttributes, getSvgAttributes } from './attributes';
import { toCamelCase, toPascalCase, toVendorPrefixCase } from './casing';
import dataTypes from './data-types';
import { globals, htmlProperties, isVendorProperty, svgProperties } from './properties';
import { getPseudos } from './selectors';
import { IDataType, Type, TypeType } from './typer';

export interface IAlias {
  type: Type.Alias;
  name: string;
  generics: IGenerics[];
}

export interface IGenerics {
  name: string;
  defaults?: string;
}

interface Interface {
  name: string;
  generics: IGenerics[];
  extends: Interface[];
  fallback: boolean;
  properties: PropertyType[];
}

interface IPropertyAlias {
  name: string;
  generics: IGenerics[];
  alias: IAlias;
  comment: string | null;
}

interface IPropertyType {
  name: string;
  type: DeclarableType;
  comment: string | null;
}

type PropertyType = IPropertyAlias | IPropertyType;

export type MixedType = TypeType<IDataType<Type.DataType> | IAlias>;
export type DeclarableType = TypeType<IAlias>;

export interface IDeclaration {
  name: string;
  export: boolean;
  types: DeclarableType[];
  generics: IGenerics[];
}

const atRules = getAtRules();
const pseudos = getPseudos();
const htmlAttributes = getHtmlAttributes();
const svgAttributes = getSvgAttributes();

export const declarations: Map<MixedType[], IDeclaration> = new Map();

const atRuleDeclaration: IDeclaration = {
  name: 'AtRules',
  export: true,
  types: declarable(atRules.literals),
  generics: [],
};

declarations.set(atRules.literals, atRuleDeclaration);

const advancedPseudosDeclaration: IDeclaration = {
  name: 'AdvancedPseudos',
  export: true,
  types: declarable(pseudos.advanced),
  generics: [],
};

declarations.set(pseudos.advanced, advancedPseudosDeclaration);

const simplePseudosDeclaration: IDeclaration = {
  name: 'SimplePseudos',
  export: true,
  types: declarable(pseudos.simple),
  generics: [],
};

declarations.set(pseudos.simple, simplePseudosDeclaration);

const pseudoAliases = [aliasOf(advancedPseudosDeclaration), aliasOf(simplePseudosDeclaration)];

const pseudosDeclaration: IDeclaration = {
  name: 'Pseudos',
  export: true,
  types: pseudoAliases,
  generics: [],
};

declarations.set(pseudoAliases, pseudosDeclaration);

const htmlAttributesDeclaration: IDeclaration = {
  name: 'HtmlAttributes',
  export: true,
  types: declarable(htmlAttributes),
  generics: [],
};

declarations.set(htmlAttributes, htmlAttributesDeclaration);

const svgAttributesDeclaration: IDeclaration = {
  name: 'SvgAttributes',
  export: true,
  types: declarable(svgAttributes),
  generics: [],
};

declarations.set(svgAttributes, svgAttributesDeclaration);

const globalsDeclaration: IDeclaration = {
  name: 'Globals',
  export: true,
  types: declarable(globals),
  generics: [],
};

declarations.set(globals, globalsDeclaration);

const globalsAndString: DeclarableType[] = [aliasOf(globalsDeclaration), { type: Type.String }];

const globalsAndStringDeclaration: IDeclaration = {
  name: 'GlobalsString',
  export: false,
  types: globalsAndString,
  generics: [],
};

declarations.set(globalsAndString, globalsAndStringDeclaration);

const declarableGlobalsAndNumber: DeclarableType[] = [aliasOf(globalsDeclaration), { type: Type.Number }];

const globalsAndNumberDeclaration: IDeclaration = {
  name: 'GlobalsNumber',
  export: false,
  types: declarableGlobalsAndNumber,
  generics: [],
};

declarations.set(declarableGlobalsAndNumber, globalsAndNumberDeclaration);

export const lengthGeneric: IGenerics = {
  name: 'TLength',
  defaults: 'string | 0',
};

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

const PROPERTY = 'Property';

function toPropertyDeclarationName(name: string) {
  return toPascalCase(name) + PROPERTY;
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
    let declaration = declarations.get(property.types);

    if (!declaration) {
      if (property.types.length === 0) {
        declaration = globalsDeclaration;
      } else if (onlyContainsString(property.types)) {
        declaration = globalsAndStringDeclaration;
      } else if (onlyContainsNumber(property.types)) {
        declaration = globalsAndNumberDeclaration;
      } else {
        const declarationName = toPropertyDeclarationName(property.name);

        declaration = {
          name: declarationName,
          export: true,
          types: [aliasOf(globalsDeclaration), ...declarable(property.types)],
          generics,
        };

        // Some SVG properties are shared with regular style properties
        // and we assume here that they are identical
        if (!declarationNameExists(declarationName)) {
          declarations.set(property.types, declaration);
        }
      }
    }

    definitions.push({
      name: property.vendor ? toVendorPrefixCase(name) : toCamelCase(name),
      generics,
      alias: aliasOf(declaration),
      comment: property.comment,
    });
    hyphenDefinitions.push({
      name,
      generics,
      alias: aliasOf(declaration),
      comment: property.comment,
    });
  }
}

const atRuleDefinitions: { [name: string]: PropertyType[] } = {};
const atRuleHyphenDefinitions: { [name: string]: PropertyType[] } = {};

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
        comment: null,
      });
      atRuleHyphenDefinitions[name].push({
        name: property,
        type,
        comment: null,
      });
    } else {
      // Some properties are prefixed and share the same type so we
      // make sure to reuse the same declaration of that type
      let declaration = declarations.get(types);

      if (!declaration) {
        declaration = {
          name: toPascalCase(name) + toPropertyDeclarationName(descriptor.name),
          export: false,
          types: declarable(types),
          generics,
        };

        declarations.set(types, declaration);
      }

      atRuleDefinitions[name].push({
        name: isVendorProperty(property) ? toVendorPrefixCase(property) : toCamelCase(property),
        generics,
        alias: aliasOf(declaration),
        comment: null,
      });
      atRuleHyphenDefinitions[name].push({
        name: property,
        generics,
        alias: aliasOf(declaration),
        comment: null,
      });
    }
  }
}

// Loop in alphabetical order
for (const name of Object.keys(dataTypes).sort()) {
  const declarableDataType = declarable(dataTypes[name]);
  declarations.set(declarableDataType, {
    name: toPascalCase(name),
    export: false,
    types: declarableDataType,
    generics: lengthIn(dataTypes[name]) ? [lengthGeneric] : [],
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
const INTERFACE_VENDOR_SHORTHAND_PROPERTIES_HYPHEN_FALLBACK = INTERFACE_VENDOR_SHORTHAND_PROPERTIES + HYPHEN + FALLBACK;
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

const standardLonghandPropertiesInterface: Interface = {
  name: INTERFACE_STANDARD_LONGHAND_PROPERTIES,
  generics: standardLonghandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: standardLonghandPropertiesDefinition,
};

const standardShorthandPropertiesInterface: Interface = {
  name: INTERFACE_STANDARD_SHORTHAND_PROPERTIES,
  generics: standardShorthandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: standardShorthandPropertiesDefinition,
};

const standardPropertiesInterface: Interface = {
  name: INTERFACE_STANDARD_PROPERTIES,
  generics: standardPropertiesGenerics,
  extends: [standardLonghandPropertiesInterface, standardShorthandPropertiesInterface],
  fallback: false,
  properties: [],
};

const vendorLonghandPropertiesInterface: Interface = {
  name: INTERFACE_VENDOR_LONGHAND_PROPERTIES,
  generics: vendorLonghandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: vendorLonghandPropertiesDefinition,
};

const vendorShorthandPropertiesInterface: Interface = {
  name: INTERFACE_VENDOR_SHORTHAND_PROPERTIES,
  generics: vendorShorthandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: vendorShorthandPropertiesDefinition,
};

const vendorPropertiesInterface: Interface = {
  name: INTERFACE_VENDOR_PROPERTIES,
  generics: vendorPropertiesGenerics,
  extends: [vendorLonghandPropertiesInterface, vendorShorthandPropertiesInterface],
  fallback: false,
  properties: [],
};

const obsoletePropertiesInterface: Interface = {
  name: INTERFACE_OBSOLETE_PROPERTIES,
  generics: obsoletePropertiesGenerics,
  extends: [],
  fallback: false,
  properties: obsoletePropertiesDefinition,
};

const svgPropertiesInterface: Interface = {
  name: INTERFACE_SVG_PROPERTIES,
  generics: svgPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: svgPropertiesDefinition,
};

const allPropertiesInterface: Interface = {
  name: INTERFACE_ALL_PROPERTIES,
  generics: allPropertiesGenerics,
  extends: [
    standardPropertiesInterface,
    vendorPropertiesInterface,
    obsoletePropertiesInterface,
    svgPropertiesInterface,
  ],
  fallback: false,
  properties: [],
};

const standardLonghandPropertiesHyphenInterface: Interface = {
  name: INTERFACE_STANDARD_LONGHAND_PROPERTIES_HYPHEN,
  generics: standardLonghandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: standardLonghandPropertiesHyphenDefinition,
};

const standardShorthandPropertiesHyphenInterface: Interface = {
  name: INTERFACE_STANDARD_SHORTHAND_PROPERTIES_HYPHEN,
  generics: standardShorthandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: standardShorthandPropertiesHyphenDefinition,
};

const standardPropertiesHyphenInterface: Interface = {
  name: INTERFACE_STANDARD_PROPERTIES_HYPHEN,
  generics: standardPropertiesGenerics,
  extends: [standardLonghandPropertiesHyphenInterface, standardShorthandPropertiesHyphenInterface],
  fallback: false,
  properties: [],
};

const vendorLonghandPropertiesHyphenInterface: Interface = {
  name: INTERFACE_VENDOR_LONGHAND_PROPERTIES_HYPHEN,
  generics: vendorLonghandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: vendorLonghandPropertiesHyphenDefinition,
};

const vendorShorthandPropertiesHyphenInterface: Interface = {
  name: INTERFACE_VENDOR_SHORTHAND_PROPERTIES_HYPHEN,
  generics: vendorShorthandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: vendorShorthandPropertiesHyphenDefinition,
};

const vendorPropertiesHyphenInterface: Interface = {
  name: INTERFACE_VENDOR_PROPERTIES_HYPHEN,
  generics: vendorPropertiesGenerics,
  extends: [vendorLonghandPropertiesHyphenInterface, vendorShorthandPropertiesHyphenInterface],
  fallback: false,
  properties: [],
};

const obsoletePropertiesHyphenInterface: Interface = {
  name: INTERFACE_OBSOLETE_PROPERTIES_HYPHEN,
  generics: obsoletePropertiesGenerics,
  extends: [],
  fallback: false,
  properties: obsoletePropertiesHyphenDefinition,
};

const svgPropertiesHyphenInterface: Interface = {
  name: INTERFACE_SVG_PROPERTIES_HYPHEN,
  generics: svgPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: svgPropertiesHyphenDefinition,
};

const allPropertiesHyphenInterface: Interface = {
  name: INTERFACE_ALL_PROPERTIES_HYPHEN,
  generics: allPropertiesGenerics,
  extends: [
    standardPropertiesHyphenInterface,
    vendorPropertiesHyphenInterface,
    obsoletePropertiesHyphenInterface,
    svgPropertiesHyphenInterface,
  ],
  fallback: false,
  properties: [],
};

const standardLongformPropertiesFallbackInterface: Interface = {
  ...standardLonghandPropertiesInterface,
  name: INTERFACE_STANDARD_LONGHAND_PROPERTIES_FALLBACK,
  fallback: true,
};

const standardShorthandPropertiesFallbackInterface: Interface = {
  ...standardShorthandPropertiesInterface,
  name: INTERFACE_STANDARD_SHORTHAND_PROPERTIES_FALLBACK,
  fallback: true,
};

const standardPropertiesFallbackInterface: Interface = {
  ...standardPropertiesInterface,
  name: INTERFACE_STANDARD_PROPERTIES_FALLBACK,
  extends: [standardLongformPropertiesFallbackInterface, standardShorthandPropertiesFallbackInterface],
  fallback: true,
};

const vendorLonghandPropertiesFallbackInterface: Interface = {
  ...vendorLonghandPropertiesInterface,
  name: INTERFACE_VENDOR_LONGHAND_PROPERTIES_FALLBACK,
  fallback: true,
};

const vendorShorthandPropertiesFallbackInterface: Interface = {
  ...vendorShorthandPropertiesInterface,
  name: INTERFACE_VENDOR_SHORTHAND_PROPERTIES_FALLBACK,
  fallback: true,
};

const vendorPropertiesFallbackInterface: Interface = {
  ...vendorPropertiesInterface,
  name: INTERFACE_VENDOR_PROPERTIES_FALLBACK,
  extends: [vendorLonghandPropertiesFallbackInterface, vendorShorthandPropertiesFallbackInterface],
  fallback: true,
};

const obsoletePropertiesFallbackInterface: Interface = {
  ...obsoletePropertiesInterface,
  name: INTERFACE_OBSOLETE_PROPERTIES_FALLBACK,
  fallback: true,
};

const svgPropertiesFallbackInterface: Interface = {
  ...svgPropertiesInterface,
  name: INTERFACE_SVG_PROPERTIES_FALLBACK,
  fallback: true,
};

const allPropertiesFallbackInterface: Interface = {
  ...allPropertiesInterface,
  name: INTERFACE_ALL_PROPERTIES_FALLBACK,
  extends: [
    standardPropertiesFallbackInterface,
    vendorPropertiesFallbackInterface,
    obsoletePropertiesFallbackInterface,
    svgPropertiesFallbackInterface,
  ],
  fallback: true,
};

const standardLongformPropertiesHyphenFallbackInterface: Interface = {
  ...standardLonghandPropertiesHyphenInterface,
  name: INTERFACE_STANDARD_LONGHAND_PROPERTIES_HYPHEN_FALLBACK,
  fallback: true,
};

const standardShorthandPropertiesHyphenFallbackInterface: Interface = {
  ...standardShorthandPropertiesHyphenInterface,
  name: INTERFACE_STANDARD_SHORTHAND_PROPERTIES_HYPHEN_FALLBACK,
  fallback: true,
};

const standardPropertiesHyphenFallbackInterface: Interface = {
  ...standardPropertiesHyphenInterface,
  name: INTERFACE_STANDARD_PROPERTIES_HYPHEN_FALLBACK,
  extends: [standardLongformPropertiesHyphenFallbackInterface, standardShorthandPropertiesHyphenFallbackInterface],
  fallback: true,
};

const vendorLonghandPropertiesHyphenFallbackInterface: Interface = {
  ...vendorLonghandPropertiesHyphenInterface,
  name: INTERFACE_VENDOR_LONGHAND_PROPERTIES_HYPHEN_FALLBACK,
  fallback: true,
};

const vendorShorthandPropertiesHyphenFallbackInterface: Interface = {
  ...vendorShorthandPropertiesHyphenInterface,
  name: INTERFACE_VENDOR_SHORTHAND_PROPERTIES_HYPHEN_FALLBACK,
  fallback: true,
};

const vendorPropertiesHyphenFallbackInterface: Interface = {
  ...vendorPropertiesHyphenInterface,
  name: INTERFACE_VENDOR_PROPERTIES_HYPHEN_FALLBACK,
  extends: [vendorLonghandPropertiesHyphenFallbackInterface, vendorShorthandPropertiesHyphenFallbackInterface],
  fallback: true,
};

const obsoletePropertiesHyphenFallbackInterface: Interface = {
  ...obsoletePropertiesHyphenInterface,
  name: INTERFACE_OBSOLETE_PROPERTIES_HYPHEN_FALLBACK,
  fallback: true,
};

const svgPropertiesHyphenFallbackInterface: Interface = {
  ...svgPropertiesHyphenInterface,
  name: INTERFACE_SVG_PROPERTIES_HYPHEN_FALLBACK,
  fallback: true,
};

const allPropertiesHyphenFallbackInterface: Interface = {
  ...allPropertiesHyphenInterface,
  name: INTERFACE_ALL_PROPERTIES_HYPHEN_FALLBACK,
  extends: [
    standardPropertiesHyphenFallbackInterface,
    vendorPropertiesHyphenFallbackInterface,
    obsoletePropertiesHyphenFallbackInterface,
    svgPropertiesHyphenFallbackInterface,
  ],
  fallback: true,
};

const atRuleInterfaces: Interface[] = [];

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
      properties: atRuleDefinitions[name],
    },
    {
      name: pascalName + HYPHEN,
      generics,
      extends: [],
      fallback: false,
      properties: atRuleHyphenDefinitions[name],
    },
    {
      name: pascalName + FALLBACK,
      generics,
      extends: [],
      fallback: true,
      properties: atRuleDefinitions[name],
    },
    {
      name: pascalName + HYPHEN + FALLBACK,
      generics,
      extends: [],
      fallback: true,
      properties: atRuleHyphenDefinitions[name],
    },
  );
}

export const interfaces = [
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
  ...atRuleInterfaces,
];

export function isAliasProperty(value: PropertyType): value is IPropertyAlias {
  return 'alias' in value;
}

function declarable(types: MixedType[]): DeclarableType[] {
  return types.sort(sorter).map<DeclarableType>(type => {
    switch (type.type) {
      case Type.DataType:
        return alias(toPascalCase(type.name), type.name in dataTypes ? dataTypes[type.name] : null);
      default:
        return type;
    }
  });
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

function alias(name: string, types?: null | MixedType[]): IAlias {
  return {
    type: Type.Alias,
    name,
    generics: types && lengthIn(types) ? [lengthGeneric] : [],
  };
}

function aliasOf({ name, types }: IDeclaration): IAlias {
  return alias(name, types);
}

function onlyContainsString(types: MixedType[]) {
  return types.every(type => type.type === Type.String);
}

function onlyContainsNumber(types: MixedType[]) {
  return types.every(type => type.type === Type.Number);
}

function declarationNameExists(name: string) {
  for (const declaration of declarations.values()) {
    if (declaration.name === name) {
      return true;
    }
  }

  return false;
}
