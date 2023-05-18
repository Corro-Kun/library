import { createPool } from "mysql2/promise";

const sql = createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "pava",
    database: "library"
})

export default sql