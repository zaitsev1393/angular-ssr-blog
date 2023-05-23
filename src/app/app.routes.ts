import { Routes } from '@angular/router';
import { BlogListComponent } from './blog/list.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'blog',
        component: BlogListComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/blog',
  },
];
