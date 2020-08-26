import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// layout
import { YunLayoutComponent } from '@brand';
import { SimpleGuard } from '@delon/auth';
import { environment } from '@env/environment';
// dashboard pages
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: YunLayoutComponent,
    canActivate: [SimpleGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'device', loadChildren: () => import('./device/device.module').then((m) => m.DeviceModule) },
      { path: 'introduce', loadChildren: () => import('./introduce/introduce.module').then((m) => m.IntroduceModule) },
      { path: 'technology', loadChildren: () => import('./technology/technology.module').then((m) => m.TechnologyModule) },
      { path: 'cooperate', loadChildren: () => import('./cooperate/cooperate.module').then((m) => m.CooperateModule) },
      { path: 'news', loadChildren: () => import('./news/news.module').then((m) => m.NewsModule) },
      { path: 'service', loadChildren: () => import('./service/service.module').then((m) => m.ServiceModule) },
    ],
  },
  { path: 'exception', loadChildren: () => import('./exception/exception.module').then((m) => m.ExceptionModule) },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
