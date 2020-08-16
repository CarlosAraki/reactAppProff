import {Request,Response} from 'express'

import db from '../database/connection';
import convertHoursToMinutes from '../utils/convertHoursToMinutes';


export default class ConnectionsController{
    async index(request:Request,response:Response){
        const totalConnections = await db('connections').count('* as total');

        const {total} = totalConnections[0];
        return response.json({total});
    }

    async create(request:Request,response:Response){
        const{ user_id} = request.body;
        try {
            await db('connections').insert({
                user_id,
            })
            return response.status(201).send('ok')

        } catch (error) {
            return response.status(400).json(
                {
                    error:"Fail"
                }
            )
        }
    }

}