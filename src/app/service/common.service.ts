import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  results: any[];
  loading: boolean;
  activeUser: any;
//constructor(pu) { }
  showEventMessage(message, duration = 3000, type?) {

    // this.snackBar.open(message, '', {
    //   direction: 'rtl',
    //   duration: duration,
    //   panelClass: type ? type : 'background-color:red!important'
    // });
  }
  exportToExcel(tableId: string, name?: string) {
    let myDate = new Date().toLocaleDateString('fa-IR');
    //let timeSpan = new Date().toISOString();
    let prefix = name || "گزارش چک لیست ";
    let fileName = `${prefix}-${myDate}`;
    let targetTableElm = document.getElementById(tableId);
   // let wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{ sheet: prefix });
  //  XLSX.writeFile(wb, `${fileName}.xlsx`);
  }

  arrayBuffer:any;
  file:File;
  incomingfile(event) 
    {
    this.file= event.target.files[0]; 
    }

  Upload() {
    let fileReader = new FileReader();
    debugger
      fileReader.onload = (e) => {
          this.arrayBuffer = fileReader.result;
          var data = new Uint8Array(this.arrayBuffer);
          var arr = new Array();
          for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
          var bstr = arr.join("");
          //var workbook = XLSX.read(bstr, {type:"binary"});
         // var first_sheet_name = workbook.SheetNames[0];
         // var worksheet = workbook.Sheets[first_sheet_name];
        
          //this.results = [ ...XLSX.utils.sheet_to_json(worksheet,{raw:true}), XLSX.utils.sheet_to_json(worksheet,{raw:true})];
          console.log(this.results);
        }
      fileReader.readAsArrayBuffer(this.file);
}

}

