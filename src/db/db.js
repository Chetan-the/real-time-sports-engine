import 'dotenv/config';
import {drizzle} from 'drizzle-orm/node-postgres';
import pg from 'pg';
if(!process.env.DATABASE_URL){
    throw new ERROR('Database url is invalid');
}
export const pool=new pg.Pool({
    connectionString:process.env.DATABASE_URL,
})
export const db=drizzle(pool);