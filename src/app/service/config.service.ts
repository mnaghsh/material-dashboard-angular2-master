import { AuthenticationService } from './authentication/authentication.service';
import { CommonService } from './common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  //baseUrl = 'http://api.naetest.ir/'
  baseUrl = 'http://api.naetest.ir/'
  
  options: { headers: HttpHeaders; };
  //baseUrl = 'http://93.126.21.21:7273/api/'
  //baseUrl="http://192.168.18.117/server/api/"


  constructor(public http: HttpClient,
    public commonService: CommonService,
    public auth: AuthenticationService
    
  ) {
    
    
    console.log('mmmm', this.options)
    this.options = {
      headers: new HttpHeaders({ Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEwMDEiLCJlbWFpbCI6Im5hZWdvbGlAeWFob28uY29tIiwidmFsaWRhdGlvbmFsRGF0ZSI6MTY1ODQwMzAxNn0.dclcZLcunZpvfFJjX-9orBK8sOQ8vdNOjBfxXpGfkp4'
      //headers: new HttpHeaders({ Authorization: (this.auth.token) 
    })
      // headers: new HttpHeaders({ Authorization: (this.auth.token.toString()) })

    };
  }

  public get(url: string, options?: any) {
    return this.http.get<any[]>(this.baseUrl + url, options);
  }

  public delete(url: string, options?: any) {
    return this.http.delete<any[]>(this.baseUrl + url, options);
  }

  public post(url: string, body?: any, options?: any) {
    console.log('options', this.options)
    return this.http.post(this.baseUrl + url, body, this.options);
  }

  public put(url: string, body, options?: any) {
    return this.http.put(this.baseUrl + url, body, options);
  }

}

