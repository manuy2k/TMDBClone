import { Homepage1Service } from './../../services/homepage1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(public hp1: Homepage1Service) { }

  dayData: any;
  weekData: any;
  toggler: boolean = true;

  ngOnInit() {
    this.hp1.trendingDay().subscribe(response => {
      this.dayData = response.results;
    });

    this.hp1.trendingWeek().subscribe(response => {
      this.weekData = response.results;
    });
  }

  toggle(){
    this.toggler = !this.toggler;
  }
}
