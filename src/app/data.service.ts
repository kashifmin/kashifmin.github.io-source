import { Injectable } from '@angular/core';
import { ProjectItem } from './models/project-item';

@Injectable()
export class DataService {

  constructor() { }

  getProjectItems() {
    let projectItems: Array<ProjectItem> = [
      {
        title: "Placements App",
        description: "An android app for dept of Placements at NMAMIT",
        link: "http://github.com/kashifmin",
        image: null,
        date: "July 2016"
      },
      {
        title: "AIDA - Artificially Intelligent Digital Assistant",
        description: `A smart assistant and a platform that servers machine learning APIs for 
        object recognition, automated text responses, voice control, action recognition, face recognition,
        basic smart assistant actions etc`,
        link: "http://github.com/kashifmin",
        image: null,
        date: "September 2017 - Ongoing"
      }
  ];
    return projectItems;
  }

}
