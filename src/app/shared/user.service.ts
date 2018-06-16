import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
    readonly rootUrl = 'http://localhost:8000';

    constructor(private http: HttpClient){ };

    registerUser(user : User){
        const body: User = {
            email: user.email,
            password: user.password,
            
        }

        return this.http.post(this.rootUrl + '/api/register', body);
    }

    userAuthentication(email,password){
        var data = {
            'email' : email,
            'password': password
        }
        return this.http.post(this.rootUrl+'/api/login',data);
    }

    userLogout(){
        return this.http.post(this.rootUrl+'api/logout',
        {headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})})
    }

    getAllPost(){
        return this.http.get(this.rootUrl+'/api/getpost');
    }

    getUserInfo(post){
        var data ='id='+post;
        return this.http.post(this.rootUrl+'api/postdetails',data,
    {headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})})
    }
    
    createPost(title, desc){
        var data = {
            'title' : title,
            'description': desc
        }
        return this.http.post(this.rootUrl+'/api/createpost',data,
        {headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})})
    }
}

