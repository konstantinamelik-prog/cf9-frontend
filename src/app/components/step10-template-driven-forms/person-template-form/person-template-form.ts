import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IPerson } from '../../../shared/interfaces/person';

@Component({
  selector: 'app-person-template-form',
  imports: [
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './person-template-form.html',
  styleUrl: './person-template-form.css',
})
export class PersonTemplateForm {
  @Output() person = new EventEmitter<IPerson>();

  onSubmit(value:any){
    console.log("Submit");
    this.person.emit(value);
  }

  onSetValue(){
    console.log("Set Value")
  }
}
