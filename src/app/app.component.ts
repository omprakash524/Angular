import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'dream-aap';
  // constructor(){
  //   setTimeout(() =>{
  //     this.title = "My microsoft";
  //   },5000);

  //   this.title = "in living";
  // }
title1 = 'dream-microsoft';
constructor(){
  setTimeout(() =>{
    this.title1 = 'google';
  },8000);
  this.title1 = 'on going practice';
}
  
}
