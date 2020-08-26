export const CLS_SCREEN = {
  mobile: 'screen-mobile',
  pc: 'screen-pc',
};

export interface YunLayoutSimpleOptions {
  leftNavs: YunLayoutSimpleNavItem[];
  right?: YunLayoutSimpleRight;
}

export interface YunLayoutSimpleRight {
  navs?: YunLayoutSimpleNavItem[];
  /**
   * Wheter display home, Default: `true`
   */
  home?: boolean;
  /**
   * Wheter display user name & logout, Default: `true`
   */
  user?: boolean;
}

export interface YunLayoutSimpleNavItem {
  text?: string;
  i18n?: string;
  router?: string;
  disabled?: boolean;
  /**
   * Just only children
   */
  icon?: string;
  click?: () => void;
  children?: YunLayoutSimpleNavItem[];
}
