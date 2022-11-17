 import mysql from 'mysql2';

 import keys from './keys';
 
 const pool = mysql.createConnection(keys.database);
 
 export default pool;