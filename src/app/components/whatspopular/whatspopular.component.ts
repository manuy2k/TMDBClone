import { Homepage1Service } from './../../services/homepage1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatspopular',
  templateUrl: './whatspopular.component.html',
  styleUrls: ['./whatspopular.component.css']
})
export class WhatspopularComponent implements OnInit {

  constructor(public popular: Homepage1Service) {

  }

  movieData: any;

  ngOnInit() {
    this.popular.popularMoviesDay().subscribe(response => {
      console.log(response);
      this.movieData = response.results;
    })
  }
}
