import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {

  url:any;
  
  constructor(private route:Router, private a:ActivatedRoute) { }

  ngOnInit() {
    //this.url= this.a.snapshot.paramMap.get({encodeURI('url')});
    this.url= this.a.params.subscribe(params=>{
      this.url=params['url'];
    }

    );
    
   // this.route.navigateByUrl(this.url);

  }

}
