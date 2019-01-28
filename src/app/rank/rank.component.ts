import { Component, OnInit } from '@angular/core';
import { RankService } from '../services/rank.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  public rank;

  constructor(private rankService: RankService) { }

  ngOnInit() {
    this.rankService.getRank().subscribe(data => this.rank = data);
  }

}
