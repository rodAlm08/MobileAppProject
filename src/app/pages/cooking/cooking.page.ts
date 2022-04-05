import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';
import {Storage} from '@ionic/storage-angular';
import { DisplayPage } from 'src/app/display/display.page';
import { DisplayPageModule } from 'src/app/display/display.module';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.page.html'
})
export class CookingPage implements OnInit {

  cooking:any[]=[];
  recipe:any;

  constructor(private getDataService:ServiceService, private NavCtrl:NavController) { }

  ngOnInit() {
    this.getDataService.getData().subscribe(
      (data)=>{
        this.cooking = data.feed;
        console.log(this.cooking);
      }
    );
  }

  openRecipe(){
    console.log("open recipe");
    this.getDataService.getData().subscribe(
      (recipes)=>{
        this.recipe = recipes.feed.display.source.sourceRecipeUrl;//url loaded
        
        
        this.NavCtrl.navigateForward(['display', {url: this.recipe}]);
        console.log(this.recipe);
      }
    );
  }

}
