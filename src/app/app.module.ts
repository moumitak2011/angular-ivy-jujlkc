import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddressPipe } from './address.pipe';
import { UserInformationComponent } from './user-information/user-information.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appModule: Routes = [
  {
    path: 'user-info',
    component: UserInformationComponent,
  },
  { path: '', redirectTo: '/user-info', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appModule),
  ],
  declarations: [AppComponent, AddressPipe, UserInformationComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
