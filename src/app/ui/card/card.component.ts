import { ProjectItem } from './../../models/project-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input()
  item: ProjectItem;

  constructor() { }

  ngOnInit() {
  }

}
