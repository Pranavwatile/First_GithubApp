import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impipe'
})
export class ImpipePipe implements PipeTransform {

    
    transform(student:any,gender:any) : any{
  
      if(gender=="male"){
    return  "Mr."+ " "+ student;
  
      }if(gender=="female"){
      return  "Ms."+" " +  student;
      }
      else{
      
  
      }
}
  }
