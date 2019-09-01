import { Component, OnInit, ElementRef } from '@angular/core';
import specificationsData from '../JsonData/specifications.json';
@Component({
  selector: 'app-pdp-specification-tab',
  templateUrl: './pdp-specification-tab.component.html',
  styleUrls: ['./pdp-specification-tab.component.css']
})
export class PdpSpecificationTabComponent implements OnInit {
  // SpecificationsDetails: any;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    // this.SpecificationsDetails = specificationsData;
  }

}
