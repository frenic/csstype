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
    computed: string;
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
  interface Selectors {
    [selector: string]: any;
  }

  var selectors: Selectors;

  export = selectors;
}
