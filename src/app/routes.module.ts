import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { UserComponent } from './public/user/user.component';
import { LoginComponent } from './public/user/login/login.component';
import { SignupComponent } from './public/user/signup/signup.component';
import { AuthGuard } from './public/auth/auth.guard';
import { ListpostComponent } from './public/listpost/listpost.component';
import { CreatepostComponent } from './public/createpost/createpost.component';
import { ViewdetailComponent } from './public/viewdetail/viewdetail.component';
import { AdminComponent } from './admin/admin.component';
import { ViewrequestComponent } from './admin/viewrequest/viewrequest.component';
import { NewpostComponent } from './admin/newpost/newpost.component';
import { PublicComponent } from './public/public.component';
import { AdminauthGuard } from './admin/auth/adminauth.guard';
import { ViewpostComponent } from './public/viewpost/viewpost.component';
import { ForgotPasswordComponent } from './public/forgot-password/forgot-password.component';
import { ProfileComponent } from './public/profile/profile.component';
import { ChangepasswordComponent  } from './public/changepassword/changepassword.component';
import { UpdatedetailComponent  } from './public/updatedetail/updatedetail.component';
import { ViewappliedjobsComponent  } from './public/viewappliedjobs/viewappliedjobs.component';

const routes: Routes = [
	{ path: '', component: PublicComponent,
		children: [{path: '', component: HomeComponent}]
	 },
	{ 
		path: 'login', component: PublicComponent,
		children: [{path: '', component: UserComponent, 
		children: [{path: '', component: LoginComponent}]}] 
	},
	{ 
		path: 'forgotpassword', component: PublicComponent,
		children: [{path: '', component: ForgotPasswordComponent}] 
	},
	{ 
		path: 'signup', component: PublicComponent,
		children: [{path: '', component: UserComponent, 
		children: [{path: '', component: SignupComponent}]}] 
	},
	{ 
		path: 'viewpost/:id', component: PublicComponent,
		children: [{path: '', component: ViewpostComponent}] 
	},
	{ 
		path: 'reset/:authid', component: PublicComponent,
		children: [{path: '', component: ResetpasswordComponent}] 
	},
	{ 
		path: 'post', component: PublicComponent , 
		children: [{path: '', component: CreatepostComponent}],
		canActivate:[AuthGuard] },
	
	{ 
		path: 'viewall', component: PublicComponent,
		children: [{path: '', component: ListpostComponent}] 
	},
	{ 
		path: 'viewdetail', component: PublicComponent, 
		children: [{path: '', component: ViewdetailComponent}],
		canActivate:[AuthGuard] 
	},
	{ 
		path: 'profile', component: PublicComponent, 
		children: [{path: '', component: ProfileComponent,
		children:[{path:'', component: UpdatedetailComponent}]}],
		canActivate:[AuthGuard] 
	},
	{ 
		path: 'userdetail', component: PublicComponent, 
		children: [{path: '', component: ProfileComponent,
		children:[{path:'', component: UpdatedetailComponent}]}],
		canActivate:[AuthGuard] 
	},
	{ 
		path: 'changepassword', component: PublicComponent, 
		children: [{path: '', component: ProfileComponent,
		children:[{path:'', component: ChangepasswordComponent}]}],
		canActivate:[AuthGuard] 
	},
	{ 
		path: 'appliedjobs', component: PublicComponent, 
		children: [{path: '', component: ProfileComponent,
		children:[{path:'', component: ViewappliedjobsComponent}]}],
		canActivate:[AuthGuard] 
	},
	
	//admin route
	{ 
		path: 'admin', component: AdminComponent
		
	},

	{ 
		path: 'viewrequest', component: AdminComponent
		,children: [{path: '', component: ViewrequestComponent}]
		// ,canActivate: [AdminauthGuard]
	},
	{ 
		path: 'newpost', component: AdminComponent,
		children: [{path: '', component: NewpostComponent}] 
		// ,canActivate: [AdminauthGuard]
	}
	// { path: 'viewdetail', component: ViewdetailComponent }

  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
 
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
  // declarations: []
})
export class RoutesModule { }
