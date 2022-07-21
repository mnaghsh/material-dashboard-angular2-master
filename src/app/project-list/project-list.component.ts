import { projectListService } from './../service/project-list/project-list.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  displayedColumns: string[];
  newRowObj: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  constructor(public projectList: projectListService) {

    debugger
  }

  ngOnInit() {
    this.displayedColumns = ['number', 'ID', 'TITLE_SAPRO', 'LOGO_SAPRO', 'CREATE_DATE_SAPRO', 'LAST_UPDATE_DATE_SAPRO', 'USER_ID_SAUSE',
    'COUNTRY_ID_SACOU', 'STATUS_SAPRO', 'ADDRESS_SAPRO', 'countryName', 'sensorNumber'
  , 'process' 
  ];

    debugger;
    this.getUserProjects()
  }
  getUserProjects() {

    this.projectList.selectAllprojectList().subscribe(
      (success) => {
        console.log('success', success.data)


        this.dataSource = new MatTableDataSource(success.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
