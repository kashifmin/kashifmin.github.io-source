import { Injectable } from '@angular/core';
import { ProjectItem } from './models/project-item';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private afData: AngularFirestore) { }

  getProjectItems(): Observable<Array<ProjectItem>> {
    return this.afData.collection('projects').valueChanges() as Observable<Array<ProjectItem>>
  }

}
