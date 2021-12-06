import { Component, Output, EventEmitter, Input, Injectable } from '@angular/core';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css'],
  inputs: ['flag']
})
export class CashComponent  {
total:number = 0;
flag:boolean = false;
@Output() newtotal = new EventEmitter<number> ();
@Input()
public setFlag(flag:boolean){
  this.flag = flag


}

@Input() t:number = 0;

@Input()
public setTotal(total:number){
  this.total = total
}





addAmount(amount:number){
  
console.log(1)
console.log(this.flag)
if(this.flag){
  console.log("heere")
  this.total = amount * 0
  this.flag = false
  this.total = this.total + amount
}
else {

  this.total = this.total + amount

}
this.newtotal.emit(this.total)

  



}



}
