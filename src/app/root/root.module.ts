import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RootComponent } from './root.component';
import { rootRoutes } from './root.routes';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(rootRoutes),
    FlexLayoutModule,
    MatButtonModule, MatCardModule
  ],
  declarations: [RootComponent]
})
export class RootModule {}
