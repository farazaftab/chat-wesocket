import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SocketService {

  public httpHeader = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  login(body){
    const url = 'http://localhost:8080/login';
    return this.http.post(url, JSON.stringify(body), { withCredentials: true, headers: this.httpHeader });
  }

  getConnection(){

  }

}
