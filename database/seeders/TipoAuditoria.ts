import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TblTipoAuditorias from 'App/Infrestructura/datos/entidades/TipoAuditoria'

export default class TipoAuditoriaSeeder extends BaseSeeder {
  public async run () {
    await TblTipoAuditorias.createMany([
      {
        id: 1,
        nombre: 'General',
        descripcion: 'Logs general de la navegacion por el sitio'
      },{
        id: 2,
        nombre: 'Inicio 1',
        descripcion: 'Cuando se loguea el usuario por primera vez'
      },{
        id: 3,
        nombre: 'Inicio 2',
        descripcion: 'Cuando entra por primera vez a una encuesta'
      },{
        id: 4,
        nombre: 'En Proceso',
        descripcion: 'Cuando al menos tiene una respuesta'
      }

    ])
  }
}
