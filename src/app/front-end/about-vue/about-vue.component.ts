import { Component, OnInit } from '@angular/core';
declare var initcanvasE: any;

@Component({
  selector: 'about-vue',
  templateUrl: './about-vue.component.html',
  styleUrls: ['./about-vue.less'],
})
export class AboutVueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var height = document.documentElement.clientHeight;
    document.getElementById('slider').style.height = height + 'px';
    initcanvasE();
  }

}
