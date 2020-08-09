import express from 'express'
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController()
const connectionsController = new ConnectionsController()

// routes.get('/',(request, response) => {
//     console.log('Acessou')
//     const users = ([
//         {
//             nome:'Roberto',
//         },
//         {
//             nome:'Top',
//         }
//     ])

//     return response.json(users)
// })

routes.get('/classes',classesController.index)
routes.post('/classes',classesController.create)

routes.get('/connections',connectionsController.index)
routes.post('/connections',connectionsController.create)

export default routes;
