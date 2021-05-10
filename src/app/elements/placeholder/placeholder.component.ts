import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  @Input() showHeader: boolean = false;
  @Input() lines: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
