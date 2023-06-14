import { RepositorioAuditoria } from "App/Dominio/Repositorios/RepositorioAuditoria";
export class ServicioAuditoria {
    constructor(private repositorio: RepositorioAuditoria) {
    }

    crearAuditoria( datos:string) {
        return this.repositorio.crearAuditoria(datos)
    }


}