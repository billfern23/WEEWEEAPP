import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3';
  selected:number[] = []
  total:number = 0

 setSelected(n:number[]) {
   this.selected = n

 }

 setTotal(n:number){
   this.total = n
 }

}
