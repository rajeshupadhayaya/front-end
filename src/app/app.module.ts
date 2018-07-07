import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes.module';
import { UserComponent } from './public/user/user.component';
import { LoginComponent } from './public/user/login/login.component';
import { SignupComponent } from './public/user/signup/signup.component';
import { HomeComponent } from './public/home/home.component';
import { UserService } from './shared/user.service';
// import { ViewpostComponent } from './viewpost/viewpost.component';
import { ListpostComponent } from './public/listpost/listpost.component';
import { AuthGuard } from './public/auth/auth.guard';
import { CreatepostComponent } from './public/createpost/createpost.component';
import { ViewdetailComponent } from './public/viewdetail/viewdetail.component';
import { Globals } from './shared/global';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {MatDialogModule} from "@angular/material";
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { AdminComponent } from './admin/admin.component';
import { ViewrequestComponent } from './admin/viewrequest/viewrequest.component';
import { NewpostComponent } from './admin/newpost/newpost.component';
import { AdminService } from './shared/admin.service';
import { PublicComponent } from './public/public.component';
import { DialogComponent } from './dialog/dialog.component';

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
    PublicComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    AngularEditorModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot()
    
  ],
  providers: [UserService,AuthGuard,Globals, ToasterService, AdminService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
