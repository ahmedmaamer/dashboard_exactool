import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEmail } from 'models/UserEmail';
import { UserInfo } from 'models/UserInfo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post("http://localhost:8002/api/v1/auth/register", user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post("http://localhost:8002/api/v1/auth/login", credentials);
  }

  async isAuthenticated(): Promise<boolean> {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      return true;
    }
    return false;
  }
  
  logout(userEmail: UserEmail): Observable<boolean> {
    const url = "http://localhost:8002/api/v1/auth/logout";
    return this.http.post<boolean>(url, userEmail);
  }

  getAllusers(){
    return this.http.get<UserInfo[]>("http://localhost:8002/api/v1/auth/getUsers")
  }
}