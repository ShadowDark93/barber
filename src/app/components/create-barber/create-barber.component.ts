import { Component, OnInit, Input } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Barbero } from 'src/app/models/Barbero';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-create-barber',
  templateUrl: './create-barber.component.html',
  styleUrls: ['./create-barber.component.css']
})
export class CreateBarberComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private _conexionService: ConexionService ) {
    this.form = this.fb.group({
      nombres:['', Validators.required],
      fechaContrato:['', Validators.required],
      celular:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      estado:[''],
    })
   }

  ngOnInit(): void {
  }

  crearBarbero(){
    const barbero: Barbero ={
      nombres : this.form.value.nombres,
      fechaContrato : this.form.value.fechaContrato,
      celular : this.form.value.celular,
      estado : this.form.value.estado,
    }
  }

}
