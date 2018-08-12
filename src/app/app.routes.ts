import { Routes } from '@angular/router';
import { GuestComponent } from './guest/guest.component';

export const appRoutes: Routes = [
  { path: '', loadChildren: './root/root.module#RootModule' },
  { path: 'guest', component: GuestComponent },
  { path: 'staff', loadChildren: './staff/staff.module#StaffModule' },
  { path: 'admin/guest-form-builder', loadChildren: './guest-form-builder/guest-form-builder.module#GuestFormBuilderModule' }
];
