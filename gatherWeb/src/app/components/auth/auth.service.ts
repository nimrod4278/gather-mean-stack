import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthData, SignupAuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({providedIn: "root"})
export class AuthService {
    private isAthenticated = false;
    private token: string;
    private tokenTimer: any;
    private authStatusListener = new Subject<boolean>();

    constructor(private http: HttpClient, private router: Router){}

    getToken() {
        console.log(this.token);
        return this.token;
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    getIsAuth(){
        return this.isAthenticated;
    }

    createUser(email: string, password: string, team: number){
        const authData : SignupAuthData = {email: email, password: password, team: team};
        this.http.post("http://localhost:3000/api/user/signup", authData)
        .subscribe(response => {
            console.log(response);
            this.router.navigate(['/']);
        });
    }

    login(email: string, password: string) {
        const authData : AuthData = {email: email, password: password};
        this.http.post<{token: string, expiresIn: number,}>("http://localhost:3000/api/user/login", authData)
        .subscribe(response => {
            const token = response.token;
            
            this.token = token
            if(token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAthenticated = true;
                this.authStatusListener.next(true);
                let now = new Date();
                let expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                // let team = response.team
                this.saveAuthData(token, expirationDate)
                this.router.navigate(['/testgame']);
            }
        });
    }

    autoAuthUser() {
        const authInfo = this.getAuthData();
        const now = new Date();
        const expiresIn = authInfo.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0){
            this.token = authInfo.token;
            this.isAthenticated = true;
            this.setAuthTimer(expiresIn / 1000)
            this.authStatusListener.next(true);
        }
    }

    logout() {
        this.token = null;
        this.isAthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    }

    private setAuthTimer(duration: number) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }

    private saveAuthData(token: string, expirationDate: Date){
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        // localStorage.setItem('team', team.toString());
    }

    private clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
    }

    public getAuthData() {
       const token = localStorage.getItem("token");
       const expirationDate = localStorage.getItem("expiration");
       if (!token || !expirationDate){
           return;
       } 

       return {
           token,
           expirationDate: new Date(expirationDate)
       }
    }
}