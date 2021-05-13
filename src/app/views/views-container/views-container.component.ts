import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-container',
  templateUrl: './views-container.component.html',
  styleUrls: ['./views-container.component.css']
})
export class ViewsContainerComponent implements OnInit {
  stats = [
    { value: 22, label: 'Number of users'},
    { value: 100, label: 'Revenue'},
    { value: 20, label: 'Reviews'}
  ]

  items = [
    { imgPath: 'assets/DonutStone.jpg', header: 'Donut Stone', description: 'Fat Donut Hole Stone Carry Logo', additionalDetails: 'Iron.Donut' },
    { imgPath: 'assets/ServingGainz.jpg', header: 'Serving Gainz', description: 'Serving gainz donut box', additionalDetails: 'serving gainz 24/7' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
