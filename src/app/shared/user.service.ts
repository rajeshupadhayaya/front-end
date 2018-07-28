import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Response } from '@angular/http';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { User } from './user.model';
import { Globals } from './global';

@Injectable()
export class UserService {
    // readonly rootUrl = 'http://localhost:8000';

    constructor(
        private http: HttpClient,
        private global: Globals,
    ){ };

    registerUser(user : User){
        const body: User = {
            email: user.email,
            password: user.password,
            
        }

        return this.http.post(this.global.rootUrl + '/api/register', body);
    }

    userAuthentication(email,password){
        var data = {
            'email' : email,
            'password': password
        }
        return this.http.post(this.global.rootUrl+'/api/login',data);
    }

    userLogout(){
        var data = {
            'logout':'logout'
        }
        return this.http.post(this.global.rootUrl+'/api/logout',data,
        {headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})})
        
    }

    userValidate(){
        return this.http.get(this.global.rootUrl+'/api/validateuser',
        {headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})})
    }

    getAllPost(){
        return this.http.get(this.global.rootUrl+'/api/getpost');
    }
    
    createPost(title, desc){
        var data = {
            'title' : title,
            'description': desc
        }
        return this.http.post(this.global.rootUrl+'/api/createpost',data,
        {headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})})
    }
}

