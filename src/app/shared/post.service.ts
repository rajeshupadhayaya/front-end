import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from './global';

@Injectable()

export class PostService {

  constructor(
    private http: HttpClient,
    private global: Globals,

  ) { }


  getPostDesc(id){
    return this.http.get(this.global.rootUrl+'/api/viewpost?query='+id);
  }

  search(query){
    return this.http.get(this.global.rootUrl+'/api/search?query='+query);
  }

  getPostInfo(post){
    var data = {
      'post_id' : post
      }
    
    return this.http.post(this.global.rootUrl+'/api/postdetails',data,
    {headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})})
    }

}
