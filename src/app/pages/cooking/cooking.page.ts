import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.page.html'
})
export class CookingPage implements OnInit {

  cooking:any[]=[];

  constructor(private getDataService:ServiceService) { }


  ngOnInit() {
    this.getDataService.getData().subscribe(
      (data)=>{
        this.cooking = data.feed;
        console.log(this.cooking);
      }
    );
  }

}
