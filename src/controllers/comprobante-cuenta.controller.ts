import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Comprobante,
  Cuenta,
} from '../models';
import {ComprobanteRepository} from '../repositories';

export class ComprobanteCuentaController {
  constructor(
    @repository(ComprobanteRepository)
    public comprobanteRepository: ComprobanteRepository,
  ) { }

  @get('/comprobantes/{id}/cuenta', {
    responses: {
      '200': {
        description: 'Cuenta belonging to Comprobante',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cuenta)},
          },
        },
      },
    },
  })
  async getCuenta(
    @param.path.string('id') id: typeof Comprobante.prototype.id,
  ): Promise<Cuenta> {
    return this.comprobanteRepository.cuenta(id);
  }
}
