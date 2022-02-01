export class Barbero {
  id?: string;
  nombres: string;
  fechaContrato: Date;
  celular: number;
  estado: string;

  constructor(id: string,nombres: string,fechaContrato: Date,celular: number,estado: string) {
    (this.id = id),
      (this.nombres = nombres),
      (this.fechaContrato = fechaContrato),
      (this.celular = celular),
      (this.estado = estado);
  }
}
