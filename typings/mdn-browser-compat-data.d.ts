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
    [rule: string]: CompatData;
  }

  interface PropertiesCompat {
    [property: string]: CompatData;
  }

  interface SelectorsCompat {
    [selector: string]: CompatData;
  }

  interface TypesCompat {
    [type: string]: CompatData;
  }

  interface GlobalAttributesCompat {
    [attribute: string]: CompatData;
  }

  interface AttributesCompat {
    [categoryOrElement: string]: {
      [attribute: string]: CompatData;
    };
  }
}

declare module 'mdn-browser-compat-data' {
  const data: {
    "css": {
      "at-rules": MDN.AtRulesCompat,
      "properties": MDN.PropertiesCompat,
      "selectors": MDN.SelectorsCompat,
      "types": MDN.TypesCompat,
    },
    "html": {
      "elements": MDN.AttributesCompat;
      "global_attributes": MDN.GlobalAttributesCompat;
    },
    "svg": {
      "elements": MDN.AttributesCompat;
      "global_attributes": MDN.AttributesCompat;
    }
  };

  export = data;
}
