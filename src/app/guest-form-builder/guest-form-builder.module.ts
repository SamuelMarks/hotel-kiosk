import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestFormBuilderComponent } from './guest-form-builder.component';
import { RouterModule } from '@angular/router';
import { guestFormBuilderRoutes } from './guest-form-builder.routes';
import { GuestModule } from '../guest/guest.module';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(guestFormBuilderRoutes),
    MatButtonModule, MatCardModule,
    GuestModule
  ],
  declarations: [GuestFormBuilderComponent]
})
export class GuestFormBuilderModule {}
