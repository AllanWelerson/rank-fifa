import { Component, OnInit, Input } from '@angular/core';
import { RankService } from '../services/rank.service';
import { InitialsService } from '../services/initials.service';


@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  @Input() public team;
  public imgSrc;
  public pointsPercent;

  constructor(private rankService: RankService, private initialsService: InitialsService) { }

  ngOnInit() {
    const initial = this.initialsService.getInitials(this.team.team);
    this.imgSrc = `https://www.countryflags.io/${initial}/flat/32.png`;
    const points = (this.team.points /  this.rankService.getFirstPoints()) * 100;
    this.pointsPercent = points.toFixed(2);


  }

}
