import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'mail',
    loadChildren: () => import('src/app/modules/mail/mail.module').then(m => m.MailModule),
  },
  {
    path: 'contacts',
    loadChildren: () => import('src/app/modules/contacts/contacts.module').then(m => m.ContactsModule),
  },
  {
    path: 'calendar',
    loadChildren: () => import('src/app/modules/calendar/calendar.module').then(m => m.CalendarModule),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mail',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
