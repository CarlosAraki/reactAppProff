import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

//localhost:3333/users
app.listen(3333);

// app.get('/users',(request, response) => {
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


// app.post('/users/:id',(request, response) => {
//     console.log('Acessou2',request.params)
//     console.log('Acessou2',request.query)
//     console.log('Acessou2',request.body)
   
// })



