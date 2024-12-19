import { query } from "../database/sqlite.js";

async function Listar(){

  let sql = "SELECT * from doctors order by name asc";
  const doctors = await query(sql,[]);

  return doctors;
}

export default {Listar};