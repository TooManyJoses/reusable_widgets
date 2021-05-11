import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-container',
  templateUrl: './collections-container.component.html',
  styleUrls: ['./collections-container.component.css']
})
export class CollectionsContainerComponent implements OnInit {
  tableData = [
    { name: 'Maynard James Keenan', age: 57 , job: 'vocals'},
    { name: 'Adam Jones', age: 56 , job: 'guitar'},
    { name: 'Danny Carey', age: 59 , job: 'drums'},
    { name: 'Justin Chancellor', age: 50 , job: 'bass'},
  ]

  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
