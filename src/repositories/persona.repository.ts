import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ContabdbDataSource} from '../datasources';
import {Persona, PersonaRelations} from '../models';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.id,
  PersonaRelations
> {
  constructor(
    @inject('datasources.contabdb') dataSource: ContabdbDataSource,
  ) {
    super(Persona, dataSource);
  }
}
