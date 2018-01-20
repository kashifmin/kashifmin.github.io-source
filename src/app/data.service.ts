import { Injectable } from '@angular/core';
import { ProjectItem } from './models/project-item';

@Injectable()
export class DataService {

  constructor() { }

  getProjectItems() {
    let projectItems: Array<ProjectItem> = [{
      title: "Placements App",
      description: "An android app for dept of Placements at NMAMIT",
      link: "http://github.com/kashifmin",
      image: null,
      date: "July 2016"
    }];
    return projectItems;
  }

}
