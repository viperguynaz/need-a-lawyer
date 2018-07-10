import { Routes } from '@angular/router';

import { HomeComponent } from '../../containers/home/home.component';
import { ResultsComponent } from '../../containers/results/results.component';
import { DetailComponent } from '../../containers/detail/detail.component';
import { PrivacyComponent } from '../../containers/privacy/privacy.component';
import { TermsComponent } from '../../containers/terms/terms.component';
import { NotFoundComponent } from '../../containers/not-found/not-found.component';
import { AboutComponent } from '../../containers/about/about.component';
import { SearchComponent } from '../../containers/search/search.component';

const _routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'search',
      component: SearchComponent,
    },
    {
      path: 'results',
      component: ResultsComponent,
    },
    {
      path: 'detail',
      component: DetailComponent,
    },
    {
      path: 'privacy',
      component: PrivacyComponent,
    },
    {
      path: 'terms',
      component: TermsComponent,
    },
    {
      path: '404',
      component: NotFoundComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
    },
  ];

  export const APP_ROUTES = _routes;