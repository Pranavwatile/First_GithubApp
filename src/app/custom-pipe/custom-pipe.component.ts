import { Component, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent {

  studentData : student [] = [

    {studentname:"Ashwini" , id:101 , gender:"female"},
    {studentname:"Shailendra" , id:102 , gender:"male"},
    {studentname:"shamal" , id:103 , gender:"female"}
  ]


  }
  class student 
  {
    studentname!:string;
    id!:number;
    gender!:string;
  }

