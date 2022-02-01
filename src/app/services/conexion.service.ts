import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Barbero } from '../models/Barbero';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private firestore: AngularFirestore ) { }

  saveBarber(barber: Barbero): Promise<any> {
    return this.firestore.collection('barbers').add(barber);
  }
}
