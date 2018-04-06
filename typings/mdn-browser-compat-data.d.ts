declare namespace MDN {
  interface Support {
    version_added: boolean | string | null;
    version_removed?: boolean | string | null;
    prefix?: string;
    alternative_name?: string;
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
    status?: {};
  }

  type PropertyCompat = { __compat: MDN.Compat } & { [value: string]: { __compat: MDN.Compat } };

  interface PropertiesCompat {
    css: {
      properties: {
        [property: string]: PropertyCompat;
      };
    };
  }
}

declare module 'browser-compat-data/css/properties/*.json' {
  var properties: MDN.PropertiesCompat;
  export = properties;
}
