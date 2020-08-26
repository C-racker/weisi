export interface PageFormBtn {
  /**
   * Wheter open type, default: `drawer`
   */
  type?: 'drawer' | 'modal';
  /**
   * Text of the button text
   */
  btn?: string;
  /**
   * Whether open target component
   */
  comp?: any;
  data?: any;
  height?: number;
  /** Whether to hide the scroll bar, default: `false` */
  hiddenScroll?: boolean;

  /** 大小；例如：lg、600，默认：`md` */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '' | number;
}

export interface PageFormSwitch {
  /** default: `post` */
  method?: string;
  /** default: `value` */
  dataKeyName?: string;
  url?: string;
  request?: (value: boolean) => Promise<boolean>;
}
