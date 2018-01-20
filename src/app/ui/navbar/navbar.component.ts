import { NavbarItem } from './../../models/navbar-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() items: Array<NavbarItem>;

  constructor() { }

  ngOnInit() {
  }

}
