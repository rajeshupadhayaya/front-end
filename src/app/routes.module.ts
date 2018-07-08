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
		path: 'signup', component: PublicComponent,
		children: [{path: '', component: UserComponent, 
		children: [{path: '', component: LoginComponent}]}] 
	},
	{ 
		path: 'viewpost/:id', component: PublicComponent,
		children: [{path: '', component: ViewpostComponent}] 
	},
	{ 
		path: 'post', component: PublicComponent , 
		children: [{path: '', component: CreatepostComponent}],
		canActivate:[AuthGuard] },
	// { path: 'post', component: CreatepostComponent },
	{ 
		path: 'viewall', component: PublicComponent,
		children: [{path: '', component: ListpostComponent}] 
	},
	{ 
		path: 'viewdetail', component: PublicComponent, 
		children: [{path: '', component: ViewdetailComponent}],
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
