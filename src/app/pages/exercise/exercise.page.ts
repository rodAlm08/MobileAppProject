import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {
  exercise:any[]=[];

  constructor(private getExerciseDataService:ServiceService) { }

  ngOnInit() {
    this.getExerciseDataService.getExerciseData().subscribe(
      (data)=>{
        this.exercise = data;
        console.log(this.exercise);
      }
    );
  }



}
