import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  demoForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(5)])
  })
}
