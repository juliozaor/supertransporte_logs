import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';
import { TipoAuditoria } from 'App/Dominio/Datos/Entidades/TipoAuditoria';

export default class TblTipoAuditorias extends BaseModel {
  public static table = 'tbl_tipo_auditorias';
  @column({ isPrimary: true, columnName: 'tta_id' })
  public id?: number

  @column({ columnName: 'tta_nombre' }) public nombre: string;
  @column({ columnName: 'tta_descripcion' }) public descripcion: string;
  @column({ columnName: 'tta_estado' }) public estado: boolean;


  public establecerTipoAuditoriaDb(auditoria: TipoAuditoria) {
    this.id = auditoria.id
    this.nombre = auditoria.nombre
    this.descripcion = auditoria.descripcion
    this.estado = auditoria.estado
  }

  public estableceTipoAuditoriaConId(auditoria: TipoAuditoria) {
    this.nombre = auditoria.nombre
    this.descripcion = auditoria.descripcion
    this.estado = auditoria.estado
  }

  public obtenerTipoAuditoria(): TipoAuditoria {
    const auditoria = new TipoAuditoria()
    auditoria.id = this.id 
    auditoria.nombre = this.nombre
    auditoria.descripcion = this.descripcion
    auditoria.estado = this.estado
    return auditoria
  }



}
