import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  page = {
    title: 'About Us',
    subtitle: 'Body & Mind App!',
    content: "Body & Mind App was developed aiming your whole wellbeing!",
    content2: "Here you'll find Easy to cook recipes, Exercises to keep your body healthy and fit and Wellbeing resources if you ever strugle!",
    content3: "Thanks for being here.\n The Developers Team.",
    image: 'assets/logo.png'
  };

  constructor() { }

  ngOnInit() {
  }

}
