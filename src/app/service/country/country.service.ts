import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(public configService:ConfigService) { }


  // public selectAllCountry():Observable<any>{
  //   return this.configService.get('users');
  // }
  // public selectOneUser(HecliECheckListId):Observable<any>{
  //   return this.configService.get('users/'+HecliECheckListId);
  // }
  
  public selectCountry(body?):Observable<any>{
    return this.configService.post('SmaritProjects/getProjectPlace',body);
  }
  
  public updateCountry(body):Observable<any>{
    return this.configService.post('SmaritProjects/createProjectPlace',body);
  }
  public deleteCountry(body):Observable<any>{
    return this.configService.post('SmaritProjects/createProjectPlace',body);
  }
  public insertCountry(body):Observable<any>{
    return this.configService.post('SmaritProjects/createProjectPlace',body);  }

}

