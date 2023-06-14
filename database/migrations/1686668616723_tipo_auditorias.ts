import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TipoAuditorias extends BaseSchema {
  protected tableName = 'tbl_tipo_auditorias'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('tta_id')
      table.string('tta_nombre', 100)
      table.string('tta_descripcion')
      table.boolean('tta_estado').defaultTo(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
