import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ContabdbDataSource} from '../datasources';
import {Cuenta, CuentaRelations} from '../models';

export class CuentaRepository extends DefaultCrudRepository<
  Cuenta,
  typeof Cuenta.prototype.id,
  CuentaRelations
> {
  constructor(
    @inject('datasources.contabdb') dataSource: ContabdbDataSource,
  ) {
    super(Cuenta, dataSource);
  }
}
