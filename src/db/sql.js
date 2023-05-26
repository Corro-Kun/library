import { createPool } from "mysql2/promise";
import { PORT_DB, HOST_DB, USER_DB, PASSWORD_DB, DATABASE_DB } from "../config.js";

const sql = createPool({
    host: HOST_DB,
    port: PORT_DB,
    user: USER_DB,
    password: PASSWORD_DB,
    database: DATABASE_DB
})

export default sql