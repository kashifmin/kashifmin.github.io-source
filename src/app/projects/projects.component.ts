import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ProjectItem } from '../models/project-item';
import { Observable }  from 'rxjs/Observable';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ DataService ]
})
export class ProjectsComponent implements OnInit {

  projectItems: Observable<Array<ProjectItem>>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.projectItems = this.data.getProjectItems();
  }

}
