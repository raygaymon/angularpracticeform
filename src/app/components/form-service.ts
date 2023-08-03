import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Details } from "./details/Details";
import { catchError, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class FormService {

    private api: string ='http://localhost:3000/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor (private http: HttpClient){}

    create(resource:string, d: Details){
        return this.http.post<Details>(this.api + resource, d);
    }



    getAll(resource: string){
        return this.http.get<Details[]>(this.api + resource);
    }
}