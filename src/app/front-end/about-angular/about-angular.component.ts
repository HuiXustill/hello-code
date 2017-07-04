import { Component, OnInit } from '@angular/core';
declare var initcanvasB: any;

@Component({
  selector: 'about-angular',
  templateUrl: './about-angular.component.html',
})
export class AboutAngularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var height = document.documentElement.clientHeight;
    document.getElementById('slider').style.height = height + 'px';
    initcanvasB();
  }

}
