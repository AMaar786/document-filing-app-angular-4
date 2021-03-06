import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../app.config';
import { User } from '../_models/index';


@Injectable()
export class UserService {


    constructor(
        private http: Http,
        private config: AppConfig,
      //  private authenticationService: AuthenticationService

        ) {
    }


    getUsers() : Observable<any>{
       return this.http.get(this.config.apiUrl + '/users', this.jwt()).map((response: Response) => response.json());
   }




   // private helper methods

   private jwt() {
       // create authorization header with jwt token
       let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       if (currentUser && currentUser.token) {
           let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
           return new RequestOptions({ headers: headers });
       }
   }
}
