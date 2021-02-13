import { Homepage1Service } from './../../services/homepage1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatspopular',
  templateUrl: './whatspopular.component.html',
  styleUrls: ['./whatspopular.component.css']
})
export class WhatspopularComponent implements OnInit {

  constructor(public hp1: Homepage1Service) { }

  ngOnInit() {
  }

  size = [1,2,3,4,5];

  goNow(){
    this.hp1.whatsPopular();
  }
}
