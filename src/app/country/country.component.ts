import { CountryService } from './../service/country/country.service';
import { ConfirmComponent } from './../components/confirm/confirm.component';
import { CommonService } from 'app/service/common.service';
import { AuthenticationService } from 'app/service/authentication/authentication.service';
import { projectListService } from './../service/project-list/project-list.service';
import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-project-list',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  displayedColumns: string[];
  newRowObj: any;
  edit = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  projects: any;
  projectId: any;
  constructor(
    public countryService: CountryService,
    @Optional() @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public auth: AuthenticationService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<any>,
    public commonService: CommonService,
  ) {
    this.projectId = dialogData.id
    debugger
  }

  ngOnInit() {

    this.newRowObj = {}
    this.displayedColumns = ['number', 'TITLE_SAPRO', 'STATUS_SAPRO', 'ADDRESS_SAPRO', 'countryName', 'sensorNumber'
      , 'process'
    ];

    this.getCountry()
  }
  public getCountry() {
    let body = {
      projectID: this.projectId,
    }

    this.countryService.selectCountry(body).subscribe(
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

    this.countryService.insertCountry(object).subscribe((success) => {
      // this.commonService.showEventMessage("ايجاد رديف با موفقيت انجام شد.", 3000, "green")
      this.getCountry();
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
    this.countryService.updateCountry(row).subscribe((success) => {
      this.commonService.showEventMessage("Update successful", 3000, "green")
      this.getCountry();
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
          this.countryService.deleteCountry(object).subscribe(
            (success) => {

              this.getCountry();
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
  selectRow(row) {
    console.log(row)
    if (!this.edit) {
      this.dialogRef.close(row)
    }

  }

}
