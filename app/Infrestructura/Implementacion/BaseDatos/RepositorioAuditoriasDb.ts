
import TblAuditorias from "App/Infrestructura/datos/entidades/Auditoria";
import { RepositorioAuditoria } from "../../../Dominio/Repositorios/RepositorioAuditoria";
import { Auditoria } from "App/Dominio/Datos/Entidades/Auditoria";


export class RepositorioAuditoriasDb implements RepositorioAuditoria {

    async crearAuditoria(datos: string): Promise<boolean> {
        let crearAuditoria: boolean = true;
        const informacion: Auditoria = JSON.parse(datos)

        //Validar si el usuario tiene un registro en el log
        const auditaria = await TblAuditorias.query().where('aud_usuario', informacion.usuario).first()

        if (!auditaria) {
            informacion.descripcion = 'Inicio sesión por primera vez'
            informacion.tipoLog = 2
        }

        if (informacion.tipoLog && informacion.tipoLog === 4) {
            const auditariaRespuesta = await TblAuditorias.query().where({ 'aud_usuario': informacion.usuario, 'aud_tipo_log': informacion.tipoLog }).first()
            if (auditariaRespuesta) {
                crearAuditoria = false
            }

        }

        if (crearAuditoria) {
            const auditar = new TblAuditorias()
            auditar.establecerAuditoriaDb(informacion)
            auditar.save();

        }


        return true

    }


}

