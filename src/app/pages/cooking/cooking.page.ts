import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.page.html'
})
export class CookingPage implements OnInit {

  cooking:any[]=[];
  recipe:any;

  constructor(private getDataService:ServiceService, 
    private NavCtrl:NavController, 
    private router:Router,
    private iab: InAppBrowser
    ) { }

  ngOnInit() {
    this.getDataService.getCookingData().subscribe(
      (data)=>{
        this.cooking = data.feed;
        console.log(this.cooking);
      }
    );
  }

  openRecipe2(recipeLoad:any){
    console.log(recipeLoad);
    //this.NavCtrl.navigateForward('/display', {state:recipeLoad});
    this.iab.create(recipeLoad);
  }


}
