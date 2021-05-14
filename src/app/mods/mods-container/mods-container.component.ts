import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-container',
  templateUrl: './mods-container.component.html',
  styleUrls: ['./mods-container.component.css']
})
export class ModsContainerComponent implements OnInit {
  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleModal() {
    this.showModal = !this.showModal;
  }

}
