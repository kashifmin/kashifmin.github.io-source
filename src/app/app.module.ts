import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
