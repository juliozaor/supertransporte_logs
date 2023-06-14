import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ServicioAuditoria } from 'App/Dominio/Datos/Servicios/ServicioAuditoria';
import { RepositorioAuditoriasDb } from 'App/Infrestructura/Implementacion/BaseDatos/RepositorioAuditoriasDb';

export default class ControladorAuditorias {
  private servicio: ServicioAuditoria
  constructor() {
    this.servicio = new ServicioAuditoria(new RepositorioAuditoriasDb)
  }
  public async guardar({ request }: HttpContextContract) {
    const datos = request.all();
    return this.servicio.crearAuditoria(JSON.stringify(datos))

  }

}
