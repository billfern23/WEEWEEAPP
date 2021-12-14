import { Component, ViewChild ,Injectable, EventEmitter } from '@angular/core';
import {CashComponent} from './cash/cash.component'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  title = 'assignment3';
  selected:number[] = []
  total:number = 0
  flagtotal:boolean = false;

 setSelected(n:number[]) {
   this.selected = n

 }

 setTotal(n:number){
   this.total = n
 }

 setflag(f:boolean){
  
  this.flagtotal= f
  
  if(this.flagtotal){
    this.total=0
  }
  console.log(this.flagtotal)
 }

}
