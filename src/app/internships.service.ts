import { Injectable } from '@angular/core';
import { internships } from './mock-internships';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//I want to be able to inject this service into other components.
@Injectable()
export class InternshipsService {

  private internshipUrl = 'http://angularkea2.azurewebsites.net/api/internships/'; // url to web api

    constructor(private http: Http) {

    }

  public addInternship(initials:string): Observable<any[]> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.internshipUrl, { initials }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

    //I want a method that returns the internships
    public getAllInternships(): Observable<any[]> {
        return this.http.get("http://angularkea1.azurewebsites.net/api/internships/getall")
          .map(this.extractData)
          .catch(this.handleError);
    }


  public update(id:string,initials:string): Observable<any[]> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.internshipUrl + id, { initials }, options)
      .map(this.extractData1)
      .catch(this.handleError);
  }

  public delete(id : string): Observable<any[]> {
    return this.http.delete("http://angularkea2.azurewebsites.net/api/internships/"+id)
      .map(this.extractData1)
      .catch(this.handleError);
  }

    private extractData(res: Response) {
      let body = res.json();
      console.log(body);
      return body || {};
    }

  private extractData1(res: Response) {
    let body = res;
    console.log(body);
    return body || {};
  }

    private handleError(error: Response | any) {
      console.log(error);
      return Observable.throw("some error message");
    }

    public getInternship(id: number): any {
        //return this.getAllInternships().find(internship => internship._id === id);
      return {};
    }
}
