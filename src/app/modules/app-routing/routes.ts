import { Routes } from '@angular/router';

import { HomeComponent } from '../../containers/home/home';
import { ResultsComponent } from '../../containers/results/results.component';
import { DetailComponent } from '../../containers/detail/detail.component';
import { PrivacyComponent } from '../../containers/privacy/privacy.component';
import { TermsComponent } from '../../containers/terms/terms.component';
import { NotFoundComponent } from '../../containers/not-found/not-found.component';
import { ErrorComponent } from '../../containers/error/error.component';
import { AboutComponent } from '../../containers/about/about.component';
import { SpecialtyComponent } from '../../containers/specialty/specialty.component';

const _routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'specialty',
      component: SpecialtyComponent,
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
      path: 'error',
      component: ErrorComponent,
    },
    {
      path: '404',
      component: NotFoundComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path: ':city/:state/:speciality/lawyers',
      component: ResultsComponent,
    },    
    {
      path: ':city/:state/:speciality/attorney/:id',
      component: DetailComponent,
    },
];

  export const APP_ROUTES = _routes;