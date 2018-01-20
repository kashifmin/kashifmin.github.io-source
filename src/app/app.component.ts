import { Component } from '@angular/core';
import { NavbarItem } from './models/navbar-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navbarItems: Array<NavbarItem> = [
    { name: "Education", route: "education"},
    { name: "Projects", route: "projects"},
    { name: "Skills", route: "skills"},
    { name: "Experience", route: "experience"}
  ]
}
