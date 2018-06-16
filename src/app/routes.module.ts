import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { ListpostComponent } from './listpost/listpost.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ 
		path: 'login', component: UserComponent,
		children: [{path: '', component: LoginComponent}] 
	},
	{ 
		path: 'signup', component: UserComponent,
		children: [{path: '', component: SignupComponent}] 
	},
	{ path: 'post', component: CreatepostComponent , canActivate:[AuthGuard] },
	// { path: 'post', component: CreatepostComponent },
	{ path: 'viewall', component: ListpostComponent },
	{ path: 'viewdetail', component: ViewdetailComponent, canActivate:[AuthGuard] }
	// { path: 'viewdetail', component: ViewdetailComponent }

  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
 
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
  // declarations: []
})
export class RoutesModule { }
