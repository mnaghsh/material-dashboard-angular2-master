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
  
  public selectProjectList(body?):Observable<any>{
    return this.configService.post('SmaritProjects/getUserProjects');
  }
  
  public updateProjectList(body):Observable<any>{
    return this.configService.post('SmaritProjects/updateProject',body);
  }
  public deleteProjectList(body):Observable<any>{
    return this.configService.post('SmaritProjects/projectDelete',body);
  }
  public insertProjectList(body):Observable<any>{
    return this.configService.post('SmaritProjects/createProject',body);  }

}

