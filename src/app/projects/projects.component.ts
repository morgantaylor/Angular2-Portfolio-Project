import { Component, OnInit } from '@angular/core';
import { Project } from '../projects/project';
import { PROJECTS } from '../projects/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = PROJECTS;

  constructor() { }

  ngOnInit() {
  }

}
