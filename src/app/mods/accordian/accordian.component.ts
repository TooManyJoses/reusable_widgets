import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {
  @Input() items = [];
  openedItemIndex: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(index: number) {
    if (index === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }

}
