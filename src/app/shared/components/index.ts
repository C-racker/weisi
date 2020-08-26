import { AddressComponent } from './address/address.component';
import { DelayDirective } from './delay/delay.directive';
import { EChartsComponent } from './echarts/echarts.component';
import { EditorComponent } from './editor/editor.component';
import { EnumSelectComponent } from './enum/enum-select.component';
import { EnumPipe } from './enum/enum.pipe';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { ImgComponent } from './img/img.component';
import { ImgDirective } from './img/img.directive';
import { InputPathComponent } from './input-path/input-path.component';
import { InputServiceComponent } from './input-service/input-service.component';
import { LangsComponent } from './langs/langs.component';
import { LinkActiveDirective } from './link-active/link-active.directive';
import { MasonryDirective } from './masonry/masonry.directive';
import { MouseFocusDirective } from './mouse-focus/mouse-focus.directive';
import { ProviceComponent } from './provice/provice.component';
import { QuickHelpComponent } from './quick-help/quick-help.component';
import { ScrollbarDirective } from './scrollbar/scrollbar.directive';
import { StatusLabelComponent } from './status-label/status-label.component';
import { VCodeComponent } from './vcode/vcode.component';

export const SHARED_COMPONENTS_ENTRY = [
  LangsComponent,
  ImgComponent,
  FileManagerComponent,
  StatusLabelComponent,
  AddressComponent,
  VCodeComponent,
  LinkActiveDirective,
];
export const SHARED_COMPONENTS = [
  EditorComponent,
  InputServiceComponent,
  InputPathComponent,
  EnumSelectComponent,
  EChartsComponent,
  ProviceComponent,
  QuickHelpComponent,
];
export const SHARED_DIRECTIVES = [ImgDirective, DelayDirective, MasonryDirective, ScrollbarDirective, MouseFocusDirective, EnumPipe];
