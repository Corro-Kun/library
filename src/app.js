import {Router} from 'express';
import sql from './db/sql.js';

export const app = Router();

app.get('/', async (req,res) =>{
    const [dato] = await sql.query("select * from book");
    await res.json(dato);
});


