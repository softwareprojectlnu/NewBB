import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignComponent} from './shared/components/sign/sign.component';
import {AboutComponent} from './modules/about/about.component';
import {HomeComponent} from './modules/home/home.component';
import {SignupComponent} from './shared/components/signup/signup.component';
import {AdminAuthGuard} from './shared/services/admin.guard';
import {AuthGuard} from './shared/services/auth-guard.service';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signin', component: SignComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [SignComponent];
