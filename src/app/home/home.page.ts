import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  myStatus: string = "";

  constructor(private storage: Storage, private navCtrl: NavController) { }


  ngOnInit() {
  }

  saveStatus(){
    console.log(this.myStatus);

    this.storage.create().then(()=>{this.storage.set("status", this.myStatus)
    .then( ()=> {this.navCtrl.navigateBack('/home')})
    .catch();
  
  })
    
    .catch();

  }

  ionViewWillEnter(){
    this.storage.create()
    .then( ()=>{ this.storage.get("status")
    .then(
       (data)=>{
        this.myStatus=data;
       } 
    )
    .catch()
  })

    .catch();
  }
}



