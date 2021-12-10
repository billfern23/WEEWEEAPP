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
   temp:number[] = []
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

  /*
  Only function that matter, if length < 5 keep changing the flag from true to false
  to change the color of the button, 
  if false and length of numbers array < 5: just keep pushing it into the numbers array
  if false: then use filter to create a new array that is not equal to the value
  tricky part: if length = 5, you dont want to let any more buttons to be clicked
  so you do the reverse of it, filter for those numbers that are only present in the numbers array
  and then change the flag 
  Boom render it.
  Since this is in the child you want to pass the changes to any number up to the parent thats where my
  emit comes in, only required once, flagClear takee care of both cash and clear cause they become active in simulatanousely.
  */
  clicker(n:{value:number, flag:Boolean}){
    if(this.selected.length <5){
      
      n.flag = (!n.flag)
    
    }

    if(this.selected.length ==4 ){
      this.flagClear = false;
      const flagTotal = false
      this.flagTotal.emit(flagTotal)
    }
  
    if(this.selected.length === 5){
      
      this.temp = this.selected.filter(el => el == n.value)
      if(this.temp){
        if(n.value == this.temp[0]){
          n.flag = (!n.flag)
          this.flagClear = true;
        }

      }
     
    }

    if(n.flag){
      if(this.selected.length <5){
        this.selected.push(n.value)
      
      }
    }
    else {
      this.temp = this.selected.filter(el => el != n.value)
      this.selected = this.temp;
    }
    const pickedNumber = this.selected
    this.pickedNumber.emit(pickedNumber)
    
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
