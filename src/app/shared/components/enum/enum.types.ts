export interface EnumData {
  [key: string]: EnumGroup;
}

export interface EnumGroup {
  [key: string]: EnumGroupItem;
}

export interface EnumGroupItem {
  name: string;
  color?: string;
}
