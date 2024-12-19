import reposioryDoctors from "../repositories/reposiory.doctors.js";

async function Listar(){
  const doctors = await reposioryDoctors.Listar();
  return doctors; 
}

export default {Listar};