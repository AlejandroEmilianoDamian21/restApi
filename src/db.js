import { createPool } from 'mysql2/promise';

const port = 3306;

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: port,
    database: 'companydb'
})
