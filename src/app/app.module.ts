import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// models
import { Permissions } from '../app/models/permissions';

// guards
import { CanAccess } from '../app/guards/canaccess';
import { OtherComponent } from './components/other/other.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const permissions: Permissions = new Permissions();

const appRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { permission: permissions }, canActivate: [CanAccess] },
  { path: 'other', component: OtherComponent, data: { permission: permissions }, canActivate: [CanAccess] },
  { path: 'pageNotFound', component: PageNotFoundComponent, data: { permission: permissions }, canActivate: [CanAccess] },
  { path: '**', redirectTo: 'pageNotFound', pathMatch: 'full' },
];

export function appConfigFactory() {
  try {
      return () => true;
  } catch (e) {
      console.log(`catch load: ${e}`);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtherComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    CanAccess,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigFactory,
      deps: [],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
