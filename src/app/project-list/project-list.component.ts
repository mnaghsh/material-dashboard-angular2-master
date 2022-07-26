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
  edit = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  projects: any;
  constructor(public projectList: projectListService) {

    debugger
  }

  ngOnInit() {
      this.newRowObj = {}
    this.displayedColumns = ['number','LAST_UPDATE_DATE_SAPRO','STATUS_SAPRO', 'ADDRESS_SAPRO', 'countryName', 'sensorNumber'
  , 'process' 
  ];

    debugger;
    this.getUserProjects()
  }
  getUserProjects() {

    this.projectList.selectAllprojectList().subscribe(
      (success) => {
        console.log('success', success.data)
        this.projects=success.data
       
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

  public addRow() {

    let object = {
      "namChkHecli": this.newRowObj.namChkHecli,
      "unitCehckListsHecli": this.newRowObj.unitCehckListsHecli,
      "namDepartmentHecli": this.newRowObj.namDepartmentHecli,
      "flgChkHecli":Number(this.newRowObj.flgChkHecli),
      "createDate": new Date()
    }

    this.projectList.selectAllprojectList(object).subscribe((success) => {
     // this.commonService.showEventMessage("ايجاد رديف با موفقيت انجام شد.", 3000, "green")
      this.getUserProjects();
      console.log('updateListOfcheckLists', success)
      this.newRowObj = {};
    },
      (error) => {
      //  this.commonService.showEventMessage("خطايي به وجود آمده يا ارتباط با سرور قطع مي باشد.", 3000, "green")
      }
    )
  }
  public editRow(row) {
    row.updateDate = new Date()
    this.edit = !this.edit;
    row['editable'] = true;


  }

  public updateRow(row) {
    this.edit = !this.edit;
    this.projectList.updateAllprojectList(row).subscribe((success) => {
     // this.commonService.showEventMessage("ويرايش رديف با موفقيت انجام شد.", 3000, "green")
      this.getUserProjects();
      console.log('updateListOfcheckLists', success)
        ;

    },
      (error) => {
       // this.commonService.showEventMessage("خطايي به وجود آمده يا ارتباط با سرور قطع مي باشد.", 3000, "green")
      }
    )

  }

  public deleteRow(row) {

    console.log('del', row)
    this.projectList.deleteAllprojectList(row['eCheckListId']).subscribe(
      (success) => {

        this.getUserProjects();
        //this.edit = !this.edit;
      //  this.commonService.showEventMessage("حذف رديف با موفقيت انجام شد.", 3000, "red")
        console.log('sucess', success)


      },
      (error) => {
       // this.commonService.showEventMessage("خطايي به وجود آمده يا ارتباط با سرور قطع مي باشد.", 3000, "green")
      }
    )
  }

 

}
