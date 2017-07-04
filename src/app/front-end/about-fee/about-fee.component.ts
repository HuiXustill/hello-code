import { Component, OnInit } from '@angular/core';
declare var initcanvasA: any;

@Component({
  selector: 'about-fee',
  templateUrl: './about-fee.component.html',
  styleUrls: ['./about-fee.less'],
})
export class AboutFeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var height = document.documentElement.clientHeight;
    document.getElementById('slider').style.height = height + 'px';
    initcanvasA();
  }

}
