import { Component, OnInit } from '@angular/core';
declare var initcanvasD: any;

@Component({
  selector: 'about-react',
  templateUrl: './about-react.component.html',
})
export class AboutReactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var height = document.documentElement.clientHeight;
    document.getElementById('slider').style.height = height + 'px';
    initcanvasD();
  }

}
