import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { AlainThemeModule } from '@delon/theme';
import { DelonUtilModule } from '@delon/util';

import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

// #region third libs
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NuMonacoEditorModule } from '@ng-util/monaco-editor';

const THIRDMODULES = [DragDropModule, NuMonacoEditorModule];
// #endregion

// #region your componets & directives

import { YUN_SHARED_COMPONENTS } from '../layout/yun';
import { SHARED_COMPONENTS, SHARED_COMPONENTS_ENTRY, SHARED_DIRECTIVES } from './components';
import { PIPES } from './pipes';

const COMPONENTS_ENTRY = [...SHARED_COMPONENTS_ENTRY];
const COMPONENTS = [...COMPONENTS_ENTRY, ...YUN_SHARED_COMPONENTS, ...SHARED_COMPONENTS];
const DIRECTIVES = [...SHARED_DIRECTIVES];

// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonACLModule,
    DelonFormModule,
    DelonUtilModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonACLModule,
    DelonFormModule,
    DelonUtilModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
})
export class SharedModule {}
