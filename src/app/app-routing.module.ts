import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { ImageSearchComponent } from './core/image-search/image-search.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'main',
    component: CoreComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/main/search' },
      {
        path: 'search',
        component: ImageSearchComponent,
      },
      {
        path: '404',
        component: PageNotFoundComponent,
      },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: '**', redirectTo: '/main/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
