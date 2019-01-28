import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InitialsService {

  private initials;
  private urlData = "initials.json";
  private pos;

  constructor(private http: HttpClient) { }

  public getInitials(){
    //const request = this.http.get(this.urlDados);
    const request = this.http.get(this.urlData);
    request.subscribe(data => this.pos = data);
    console.log(this.pos);
    return request;
  }

}
