import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Sayan Ajinkya';
  clickit(value: any){
    this.title = value;
    alert("Hello "+ this.title);
    console.log(1);
  }
  constructor(){}

  ngOnInit(){
    // const obsTest$ = new Observable(observer =>{
    //   console.log('Printed from observale')
    // }).subscribe();

    // for above observable function, we don't have to separately call the function, it happens automactically using sunscribe() method

    // const obsTest$ = new Observable(observer =>{
    //   observer.next('Returned from observale'); //observer.next is equivalent to return method in normal function
    //   observer.next('2 Returned from observable');
    //   observer.next('3 Returned from observale');
    // }).subscribe(value => {
    //   console.log(value);
    // });

    // // THIS IS SYNCHRONOUS 

  //   const obsTest$ = new Observable(observer =>{
  //     observer.next('Returned from observale'); //observer.next is equivalent to return method in normal function
  //     setTimeout(() => {
  //     observer.next('2 Returned from observable using Timout func');
  //     }, 2000);
  //     observer.next('3 Returned from observale');
  //   }).subscribe(value => {
  //     console.log(value);
  //   });
  //   obsTest$.unsubscribe();
  //   //THIS IS ASYNCHRONOUS

  //   const obsTests = () => console.log("Printed from function");
  
  // obsTests();
  // //this is a normal function which needs to be called using method calling
  
  }
}
