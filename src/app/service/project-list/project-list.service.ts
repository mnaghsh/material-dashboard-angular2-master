import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';


@Injectable({
  providedIn: 'root'
})
export class projectListService {

  constructor(public configService:ConfigService) { }


  // public selectAllprojectList():Observable<any>{
  //   return this.configService.get('users');
  // }
  // public selectOneUser(HecliECheckListId):Observable<any>{
  //   return this.configService.get('users/'+HecliECheckListId);
  // }
  
  public selectAllprojectList(body?):Observable<any>{
    return this.configService.post('SmaritProjects/getUserProjects');
  }
  
  public updateAllprojectList(body):Observable<any>{
    return this.configService.post('SmaritProjects/updateProject',body);
  }
  public deleteAllprojectList(id):Observable<any>{
    return this.configService.delete('SmaritProjects/getUserProjects/'+id);
  }

}

