export * from './public_api';

import { YUN_WIDGETS } from './_widgets';

// #region entry components

export const YUN_ENTRYCOMPONENTS = [];

// #endregion

// #region components

import { YunLayoutSimpleComponent } from './yun-simple.component';
import { YunLayoutComponent } from './yun.component';

export const YUN_COMPONENTS = [YunLayoutComponent, YunLayoutSimpleComponent, ...YUN_ENTRYCOMPONENTS, ...YUN_WIDGETS];

// #endregion

// #region shared components

import { LayoutFooterComponent } from './shared/footer/footer.component';
import { LayoutPageFormComponent } from './shared/page-form/page-form.component';
import { LayoutPageComponent } from './shared/page/page.component';

export const YUN_SHARED_COMPONENTS = [LayoutPageComponent, LayoutPageFormComponent, LayoutFooterComponent];

// #endregion
