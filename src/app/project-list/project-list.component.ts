import { projectListService } from './../service/project-list/project-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(public projectList: projectListService) {

  }

  ngOnInit() {
    this.getUserProjects()
  }
  getUserProjects() {
    let body = {
      
    }
    this.projectList.selectAllprojectList(body).subscribe(
      (success) => {

      }
    )
  }

}
