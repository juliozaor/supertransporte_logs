
import Route from '@ioc:Adonis/Core/Route'
const controlador = '../../../app/Presentacion/Auditoria/ControladorAuditorias'

Route.get('/', async () => {
  return 'Bienvenido al registro de logs'
})

Route.group(() => {
  Route.post('/', `${controlador}.guardar`)
}).prefix('api/v1/auditoria')
