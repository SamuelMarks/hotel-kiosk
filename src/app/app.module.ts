import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { MatButtonModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { GuestModule } from './guest/guest.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,  RouterModule.forRoot(appRoutes),
    MatSidenavModule, MatToolbarModule, MatButtonModule,
    GuestModule
  ] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
