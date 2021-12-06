import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css'],

})
export class CashComponent  {
total:number = 0;


@Output() newtotal = new EventEmitter<number> ();



addAmount(amount:number){
  this.total = this.total + amount
  this.newtotal.emit(this.total)



}



}
