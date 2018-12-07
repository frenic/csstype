declare namespace MDN {
  interface Support {
    version_added: boolean | string | null;
    version_removed?: boolean | string | null;
    prefix?: string;
    alternative_name?: string;
    partial_implementation: boolean;
    notes: string | string[];
    flags?: any[];
  }

  type Browsers =
    | 'webview_android'
    | 'chrome'
    | 'chrome_android'
    | 'edge'
    | 'edge_mobile'
    | 'firefox'
    | 'firefox_android'
    | 'ie'
    | 'nodejs'
    | 'opera'
    | 'opera_android'
    | 'qq_android'
    | 'safari'
    | 'safari_ios'
    | 'samsunginternet_android'
    | 'uc_android'
    | 'uc_chinese_android';

  type Supports = { [browser in Browsers]: Support | Support[] };

  interface Compat {
    support: Supports;
    mdn_url?: string;
    description?: string;
    status?: {
      experimental: boolean;
      standard_track: boolean;
      deprecated: boolean;
    };
  }

  type CompatDataInner = {
    __compat: MDN.Compat;
  };

  type CompatData = CompatDataInner & Record<string, CompatDataInner>;

  interface AtRulesCompat {
    css: {
      'at-rules': {
        [rule: string]: CompatData;
      };
    };
  }

  interface PropertiesCompat {
    css: {
      properties: {
        [property: string]: CompatData;
      };
    };
  }

  interface SelectorsCompat {
    css: {
      selectors: {
        [selector: string]: CompatData;
      };
    };
  }

  interface TypesCompat {
    css: {
      types: {
        [type: string]: CompatData;
      };
    };
  }

  interface GlobalAttributesCompat {
    html: {
      global_attributes: {
        [attribute: string]: CompatData;
      };
    };
  }

  interface AttributesCompat {
    [htmlOrSvg: string]: {
      [attributesOrElements: string]: {
        [categoryOrElement: string]: {
          [attribute: string]: CompatData;
        };
      };
    };
  }
}

declare module 'browser-compat-data/css/at-rules/*.json' {
  var atRules: MDN.AtRulesCompat;
  export = atRules;
}

declare module 'browser-compat-data/css/properties/*.json' {
  var properties: MDN.PropertiesCompat;
  export = properties;
}

declare module 'browser-compat-data/css/selectors/*.json' {
  var selectors: MDN.SelectorsCompat;
  export = selectors;
}

declare module 'browser-compat-data/css/types/*.json' {
  var types: MDN.TypesCompat;
  export = types;
}

declare module 'mdn-browser-compat-data/html/global_attributes.json' {
  var types: MDN.GlobalAttributesCompat;
  export = types;
}

declare module 'mdn-browser-compat-data/html/elements/*.json' {
  var types: MDN.AttributesCompat;
  export = types;
}

declare module 'mdn-browser-compat-data/svg/attributes/*.json' {
  var types: MDN.AttributesCompat;
  export = types;
}

declare module 'mdn-browser-compat-data/svg/elements/*.json' {
  var types: MDN.AttributesCompat;
  export = types;
}
