import { ActivatedRoute } from '@angular/router';
//package com.in28minutes.springboot.web;
import { WelcomeDataService } from './../service/data/welcome-data.service';
//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';//'./app.component';
//import { AppComponent } from '../app.component';

//@ComponentScan(
//      value = "com.in28minutes.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  WelcomeMessageFromService: string
  name = ''
  //String message = "Some Welcome Message"

  //public SpringBootFirstWebApplication() {	

  //ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) {

  }

  // void init() {
  ngOnInit() {
    //COMPILATION ERROR this.message = 5
    //console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];

  }

  getWelcomeMessage() {

    
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.HandleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      //response => console.log(response.message)
    );
    console.log("last line of Get welcome message")
  }
  getWelcomeMessagewithparameter(){
    console.log(this.service.executeHelloWorldBeanServiceWithPathVariable(this.name));
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.HandleSuccessfulResponse(response),
      error => this.handleErrorResponse(error));
  }
  HandleSuccessfulResponse(response) {
    this.WelcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);

  }
  handleErrorResponse(error) {
   // console.log(error)

    //console.log(error.error)

    //console.log(error.error.message)

    this.WelcomeMessageFromService = error.error.message
  }


}

export class Class1 {

}

export class Class2 {

}