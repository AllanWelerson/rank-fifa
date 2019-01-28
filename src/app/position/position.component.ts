import { Component, OnInit, Input } from '@angular/core';
import { RankService } from '../services/rank.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  @Input() public team;
  private imgSrc;
  private pointsPercent;

  constructor(private rankService: RankService) { }

  ngOnInit() {
    this.imgSrc = `https://www.countryflags.io/br/flat/64.png`;
    const points = (this.team.points /  this.rankService.getFirstPoints()) * 100;
    this.pointsPercent = points.toFixed(2);
  }

}
