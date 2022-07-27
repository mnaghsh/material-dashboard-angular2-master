import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'app/service/common.service';
import { ConfigService } from 'app/service/config.service';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  text:string;
  constructor(private configService: ConfigService,
    private commonService:CommonService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data
    ) {
this.text=data.text
  }

  ngOnInit() {
   
   
  }

  public selectAnswer(mode){
    if(mode==1)
    this.dialogRef.close(1)
    else{
      this.dialogRef.close(0)
    }

  }
 

}
