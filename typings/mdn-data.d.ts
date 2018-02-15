declare module 'mdn-data/css/properties.json' {
  interface Property {
    syntax: string;
    media: string;
    inherited: boolean;
    animationType: string;
    percentages: string;
    groups: string[];
    initial: string;
    appliesto: string;
    computed: string | string[];
    order: string;
    status: string;
  }

  interface Properties {
    [property: string]: Property;
  }

  var properties: Properties;

  export = properties;
}

declare module 'mdn-data/css/syntaxes.json' {
  interface Syntax {
    syntax: string;
  }

  interface Syntaxes {
    [property: string]: Syntax;
  }

  var syntaxes: Syntaxes;

  export = syntaxes;
}

declare module 'mdn-data/css/selectors.json' {
  interface Selector {
    syntax: string;
    groups: string[];
    status: string;
  }
  interface Selectors {
    [selector: string]: Selector;
  }

  var selectors: Selectors;

  export = selectors;
}

declare module 'mdn-data/css/types.json' {
  interface Types {
    [name: string]: any;
  }

  var types: Types;

  export = types;
}

declare module 'mdn-data/css/at-rules.json' {
  interface Descriptor {
    syntax: string;
    media: string;
    percentages: string | string[];
    initial: string | string[];
    computed: string | string[];
    order: string;
  }

  interface Descriptors {
    [descriptor: string]: Descriptor;
  }

  interface AtRule {
    syntax: string;
    interfaces: string[];
    groups: string[];
    descriptors: Descriptors;
    status: string;
  }

  interface AtRules {
    [name: string]: AtRule;
  }

  var atRules: AtRules;

  export = atRules;
}
