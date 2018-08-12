import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest.component';
import { RouterModule } from '@angular/router';
import { guestRoutes } from './guest.routes';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatStepperModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    // RouterModule, RouterModule.forChild(guestRoutes),
    MatStepperModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule
  ],
  declarations: [GuestComponent],
  exports: [GuestComponent]
})
export class GuestModule {}
