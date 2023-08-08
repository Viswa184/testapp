import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  heros =[
    {name:'spiderman',tech:'web'},
    {name:'captain america',tech:'web technology'},
    {name:'ironman',tech:'armor'}]
   public getHeros(){

    return this.heros;
   }

  
}
