import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes.module';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
// import { LogoutComponent } from './user/logout/logout.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './shared/user.service';
// import { ViewpostComponent } from './viewpost/viewpost.component';
import { ListpostComponent } from './listpost/listpost.component';
import { AuthGuard } from './auth/auth.guard';
import { CreatepostComponent } from './createpost/createpost.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { DialogComponent } from './dialog/dialog.component';
import { Globals } from './shared/global';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {MatDialogModule} from "@angular/material";
import {ToastModule} from 'ng2-toastr/ng2-toastr';

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
    DialogComponent
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
    ToastModule.forRoot()
    
  ],
  providers: [UserService,AuthGuard,Globals],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
