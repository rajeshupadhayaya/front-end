import { ConfirmmailComponent } from './public/confirmmail/confirmmail.component';
import { ResetpasswordComponent } from './public/resetpassword/resetpassword.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes.module';
import { UserComponent } from './public/user/user.component';
import { LoginComponent } from './public/user/login/login.component';
import { SignupComponent } from './public/user/signup/signup.component';
import { HomeComponent } from './public/home/home.component';
import { UserService } from './shared/user.service';
import { ListpostComponent } from './public/listpost/listpost.component';
import { AuthGuard } from './public/auth/auth.guard';
import { CreatepostComponent } from './public/createpost/createpost.component';
import { ViewdetailComponent } from './public/viewdetail/viewdetail.component';
import { Globals } from './shared/global';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatAutocompleteModule, MatInputModule, MatDialogModule } from "@angular/material";
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { AdminComponent } from './admin/admin.component';
import { ViewrequestComponent } from './admin/viewrequest/viewrequest.component';
import { NewpostComponent } from './admin/newpost/newpost.component';
import { AdminService } from './shared/admin.service';
import { PublicComponent } from './public/public.component';
import { DialogComponent } from './dialog/dialog.component';
import { PostService } from './shared/post.service';
import { ViewpostComponent } from './public/viewpost/viewpost.component';
import { ProfileComponent  } from './public/profile/profile.component';
import { ForgotPasswordComponent  } from './public/forgot-password/forgot-password.component';
import { ChangepasswordComponent  } from './public/changepassword/changepassword.component';
import { UpdatedetailComponent  } from './public/updatedetail/updatedetail.component';
import { ViewappliedjobsComponent  } from './public/viewappliedjobs/viewappliedjobs.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider,} from "angular-6-social-login";

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("2017351708298423")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("252298833922-5me5lc333mq2kpbnibg8kodd5gbgdbv7.apps.googleusercontent.com")
        }
      ]);

  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ListpostComponent,
    CreatepostComponent,
    ViewdetailComponent,
    DialogComponent,
    AdminComponent,
    ViewrequestComponent,
    NewpostComponent,
    PublicComponent,
    ViewpostComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    ChangepasswordComponent,
    UpdatedetailComponent,
    ViewappliedjobsComponent,
    ResetpasswordComponent,
    ConfirmmailComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    AngularEditorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    SocialLoginModule
    
  ],
  providers: [UserService,AuthGuard,Globals, ToasterService, AdminService, PostService,
      {
          provide: AuthServiceConfig,
          useFactory: getAuthServiceConfigs
      }
    ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
