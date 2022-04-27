import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



@Component({
  selector: 'app-wellbeing',
  templateUrl: './wellbeing.page.html',
  styleUrls: ['./wellbeing.page.scss'],
})
export class WellbeingPage implements OnInit {
  wellbeing:any = 'https://www.hse.ie/healthandwellbeing/';

  constructor( private iab: InAppBrowser) { }

  ngOnInit() {
  }

  openWellbeing(){
    console.log(this.wellbeing);
    this.iab.create(this.wellbeing);
  }

}
