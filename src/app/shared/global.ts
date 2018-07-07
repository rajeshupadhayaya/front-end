import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    userLogin: boolean = false;
    isAdmin: boolean = false;
    readonly rootUrl = 'http://localhost:8000';
    // readonly rootUrl = 'http://avbiz.com/index.php';
}