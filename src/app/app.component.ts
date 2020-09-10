import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medlinedemo';
  display="none";
  formData:formData;
  showForm:boolean = true;
  sucMsg:boolean= false;

  onSubmit(form: NgForm){
    
    if(form.valid)
    {
      console.log('Submitted ' , form);
      this.display="block";
      this.formData = form.value;
    }
  }

  modalSubmit()
  {
    this.showForm = false;
    this.sucMsg = true;
    this.display="block";
  }
}

interface formData { 
  fname:string, 
  lastName:string, 
  phone:string,
  email:string
} 

