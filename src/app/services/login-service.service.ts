import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

// Interfaces
import { HttpResponse } from '../interfaces/http-response';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<HttpResponse> {
    return this.httpClient.post<HttpResponse>(environment.apiEndpoint + '/login', {username, password})
      .pipe(map(res => res));
  }


}
