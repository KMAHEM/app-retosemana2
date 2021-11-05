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
  Persona,
} from '../models';
import {ComprobanteRepository} from '../repositories';

export class ComprobantePersonaController {
  constructor(
    @repository(ComprobanteRepository)
    public comprobanteRepository: ComprobanteRepository,
  ) { }

  @get('/comprobantes/{id}/persona', {
    responses: {
      '200': {
        description: 'Persona belonging to Comprobante',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Persona)},
          },
        },
      },
    },
  })
  async getPersona(
    @param.path.string('id') id: typeof Comprobante.prototype.id,
  ): Promise<Persona> {
    return this.comprobanteRepository.persona(id);
  }
}
