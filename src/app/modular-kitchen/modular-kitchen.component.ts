import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modular-kitchen',
  templateUrl: './modular-kitchen.component.html',
  styleUrls: ['./modular-kitchen.component.css']
})
export class ModularKitchenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageURL:string="";
  imageName:string="";

  getImage(inputInfo,inputName){
    this.imageURL=inputInfo.src;
    this.imageName=inputName.innerHTML;
  }

}
