import { Component, OnInit, ElementRef } from '@angular/core';
import overviewData from '../JsonData/overview.json';

@Component({
  selector: 'app-pdp-overview',
  templateUrl: './pdp-overview.component.html',
  styleUrls: ['./pdp-overview.component.css']
})
export class PdpOverviewComponent implements OnInit {
     OverviewDetails: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
      this.OverviewDetails = overviewData;
  }

  scrollToDescription() {
    const section = document.getElementById("section2");
    const section1 = document.getElementById("section1");
    window.scrollTo(0, section.offsetTop - 144);
    if(section !=section1){
      console.log("section" + section);
    }
    
  }

}
