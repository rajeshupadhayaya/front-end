import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from './global';

@Injectable()

export class AdminService {
  
  constructor(
    private http: HttpClient,
    private global: Globals,
  ) { }

  adminAuthentication(email,password){
    var data = {
        'email' : email,
        'password': password
    }

    return this.http.post(this.global.rootUrl+'/api/admin/login',data);
  }

  adminLogout(){
    return this.http.post(this.global.rootUrl+'api/admin/logout',
    {headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('adminToken')})})
  }

  getNewPost(){
    return this.http.get(this.global.rootUrl+'/api/admin/getpost',
    {headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('adminToken')})});
  }

  getViewRequest(){
    return this.http.get(this.global.rootUrl+'/api/admin/getviewrequest',
    {headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('adminToken')})});
  }

  approvePost(post_id, status){
    var data = {
      'post_id' : post_id,
      'status': status
    }
    return this.http.post(this.global.rootUrl+'/api/admin/approvepost',data,
    {headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('adminToken')})})
  }

  approveRequest(req_id, status){
    var data = {
      'req_id' : req_id,
      'status': status
    }
    return this.http.post(this.global.rootUrl+'/api/admin/approveviewrequest',data,
    {headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('adminToken')})})

  }
}
