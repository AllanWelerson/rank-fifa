import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankService {

  private urlData = "http://localhost:3000/rank";
  private rank;
  private fistPoints: number;

  constructor(private http: HttpClient) { }

  getRank(){
    const request = this.http.get(this.urlData);
    request.subscribe(data => this.rank = data);
    return request;
  }

  getFirstPoints(): number{
    this.rank.filter((data) => {
      if (data.position == '1'){
        this.fistPoints = data.points;
      }} );
     return this.fistPoints;
  }
}
