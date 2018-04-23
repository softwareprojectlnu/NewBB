import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './modules/about/about.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {HomeComponent} from './modules/home/home.component';
import {SignComponent} from './shared/components/sign/sign.component';
import {SignupComponent} from './shared/components/signup/signup.component';

import {AuthService} from './shared/services/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AboutComponent,
    HomeComponent,
    SignComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [AuthService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule {
}
