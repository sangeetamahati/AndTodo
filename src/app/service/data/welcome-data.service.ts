import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
//import { HttpClient,  } from '@angular/common/http';

export class HelloWorldBean{

  constructor(public message:string){}
  
  }
@Injectable({
  providedIn: 'root'
})



export class WelcomeDataService {


  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanServiceWithPathVariable(name){
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
         Authorization: basicAuthHeaderString
       })

return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`,{headers});
       //console.log("execute hello world bean service")
  }
  
      createBasicAuthenticationHttpHeader() {
           let username = 'mahati'
         let password = 'dummy'
          let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
        return basicAuthHeaderString;
         }
         executeHelloWorldBeanService(){
    
          return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
                 //console.log("execute hello world bean service")
            }
            
}
