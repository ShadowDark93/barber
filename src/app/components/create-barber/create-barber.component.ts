import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-barber',
  templateUrl: './create-barber.component.html',
  styleUrls: ['./create-barber.component.css']
})
export class CreateBarberComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombres:['', Validators.required],
      fechaContrato:['', Validators.required],
      celular:['', Validators.required],
      estado:['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  crearBarbero(){
    console.log(this.form);
  }

}
