import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Persona} from './persona.model';
import {Cuenta} from './cuenta.model';

@model()
export class Comprobante extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  codigo: string;

  @property({
    type: 'string',
    required: true,
  })
  numeroComprobante: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  concepto: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoMov: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @belongsTo(() => Persona)
  personaId: string;

  @belongsTo(() => Cuenta)
  cuentaId: string;

  constructor(data?: Partial<Comprobante>) {
    super(data);
  }
}

export interface ComprobanteRelations {
  // describe navigational properties here
}

export type ComprobanteWithRelations = Comprobante & ComprobanteRelations;
