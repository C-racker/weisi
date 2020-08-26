export interface PageNav {
  title?: string;
  i18n?: string;
  url?: string;
  disabled?: boolean;
  tag?: PageNavTag;
  selected?: boolean;
  children?: PageNav[];
  [key: string]: any;
}

export interface PageNavBack {
  i18n?: string;
  title?: string;
  url?: string;
  disabled?: boolean;
}

export interface PageNavTag {
  text: string;
  /**
   * Whether color of the tab item, default: `red`
   */
  color?: string;
}

export interface PageRouteData {
  /**
   * Title i18n
   */
  i18n?: string;
  title?: string;
  /**
   * Whether show nav when set `nav`, default: `true`
   */
  pageShowNav?: boolean;
  /**
   * Back config
   */
  pageBack?: PageNavBack;

  [key: string]: any;
}
