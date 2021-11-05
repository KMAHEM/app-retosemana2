import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ContabdbDataSource} from '../datasources';
import {Comprobante, ComprobanteRelations, Persona, Cuenta} from '../models';
import {PersonaRepository} from './persona.repository';
import {CuentaRepository} from './cuenta.repository';

export class ComprobanteRepository extends DefaultCrudRepository<
  Comprobante,
  typeof Comprobante.prototype.id,
  ComprobanteRelations
> {

  public readonly persona: BelongsToAccessor<Persona, typeof Comprobante.prototype.id>;

  public readonly cuenta: BelongsToAccessor<Cuenta, typeof Comprobante.prototype.id>;

  constructor(
    @inject('datasources.contabdb') dataSource: ContabdbDataSource, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>, @repository.getter('CuentaRepository') protected cuentaRepositoryGetter: Getter<CuentaRepository>,
  ) {
    super(Comprobante, dataSource);
    this.cuenta = this.createBelongsToAccessorFor('cuenta', cuentaRepositoryGetter,);
    this.registerInclusionResolver('cuenta', this.cuenta.inclusionResolver);
    this.persona = this.createBelongsToAccessorFor('persona', personaRepositoryGetter,);
    this.registerInclusionResolver('persona', this.persona.inclusionResolver);
  }
}
