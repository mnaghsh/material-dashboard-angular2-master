import { ConfirmComponent } from './../components/confirm/confirm.component';
import { CommonService } from 'app/service/common.service';
import { AuthenticationService } from 'app/service/authentication/authentication.service';
import { projectListService } from './../service/project-list/project-list.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
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
  constructor(
    public projectList: projectListService,
    public auth: AuthenticationService,
    private dialog: MatDialog,
    public commonService: CommonService,
  ) {

    debugger
  }

  ngOnInit() {

    this.newRowObj = {}
    this.displayedColumns = ['number', 'TITLE_SAPRO', 'STATUS_SAPRO', 'ADDRESS_SAPRO', 'countryName', 'sensorNumber'
      , 'process'
    ];

    debugger;
    this.getUserProjects()
  }
  public getUserProjects() {

    this.projectList.selectProjectList().subscribe(
      (success) => {
        console.log('success', success.data)
        this.projects = success.data

        this.dataSource = new MatTableDataSource(success.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }
    )
  }
  public addRow() {

    let object = {
      "LOGO_SAPRO": "dasgdaassg.jpg",
      "TITLE_SAPRO": this.newRowObj.TITLE_SAPRO,
      "STATUS_SAPRO": this.newRowObj.STATUS_SAPRO,
      "ADDRESS_SAPRO": this.newRowObj.ADDRESS_SAPRO,
      "COUNTRY_ID_SACOU": 1

    }

    this.projectList.insertProjectList(object).subscribe((success) => {
      // this.commonService.showEventMessage("ايجاد رديف با موفقيت انجام شد.", 3000, "green")
      this.getUserProjects();
      console.log('updateListOfcheckLists', success)
      this.commonService.showEventMessage("Insert successful", 3000, "green")

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
    row.projectID = row.ID
    this.projectList.updateProjectList(row).subscribe((success) => {
      this.commonService.showEventMessage("Update successful", 3000, "green")
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


    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: "25%",
      height: "25%",
      data: {
        text: " Are You Sure?",
      }
    });
    dialogRef.afterClosed().subscribe(
      (data) => { 
        if (data == 1) {



          let object = {
            "projectID": row.ID
          }
      
          console.log('del', row)
          this.projectList.deleteProjectList(object).subscribe(
            (success) => {
      
              this.getUserProjects();
              //this.edit = !this.edit;
              //  this.commonService.showEventMessage("حذف رديف با موفقيت انجام شد.", 3000, "red")
              this.commonService.showEventMessage("Delete successful", 3000, "green")
      
      
      
            },
            (error) => {
              // this.commonService.showEventMessage("خطايي به وجود آمده يا ارتباط با سرور قطع مي باشد.", 3000, "green")
            }
          )

        }


      })




  }
  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
