import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { RouterModule } from '@angular/router';
import { staffRoutes } from './staff.routes';
import { MatCheckboxModule, MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(staffRoutes),
    CdkTableModule, MatTableModule, MatCheckboxModule
  ],
  declarations: [StaffComponent]
})
export class StaffModule {}
