import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lotterynumbers',
  templateUrl: './lotterynumbers.component.html',
  styleUrls: ['./lotterynumbers.component.css']
})
export class LotterynumbersComponent implements OnInit {
  title = 'assignment3';
  buttonsArray:{value:number, flag:Boolean}[] = [];
  flagButton:Boolean = false
  flagClearAmount:Boolean = false;
  currentNumber:number = 0
  selected:number[] = []
  s:number = 1
  flagClear:boolean = true
  constructor() { }

   ngOnInit(){
    for(let i = 1; i < 21 ; i++ ){
      this.buttonsArray.push({
        value:i,
        flag:false
      })
    }
    
  }
  @Output() pickedNumber = new EventEmitter<number[]> ();
  @Output() flagTotal = new EventEmitter<boolean> ();
  clicker(n:{value:number, flag:Boolean}){

    if(this.selected.length < 5 && n.flag === false){

      n.flag = true;
      this.selected.push(n.value)

      const pickedNumber = this.selected
      this.pickedNumber.emit(pickedNumber)
    }
    if(this.selected.length === 5){
      this.flagClear = false;
      const flagTotal = false
    this.flagTotal.emit(flagTotal)
  
    }
 
     //this.flagButton = (!this.flagButton)
     //window.alert(n)
   }
 
   cashClick()
   {
     console.log("Hello")
   }

   clear(){
    this.buttonsArray=[]
    for(let i = 1; i < 21 ; i++ ){
      this.buttonsArray.push({
        value:i,
        flag:false
      })
      this.flagClear = true;
   }
   this.selected = []
   const pickedNumber = this.selected

   const flagTotal = true
    this.flagTotal.emit(flagTotal)
   this.pickedNumber.emit(pickedNumber)

  }
 


}
