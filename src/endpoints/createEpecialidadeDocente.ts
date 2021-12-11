import { Request, Response } from "express";
import { connection } from "../data/connection";

export const createEspecialidadeDocente = async (
    req: Request,
     res: Response
     ) => {
  try {
    const { docente_id, especialidade_id} = req.body;

    if (!docente_id || !especialidade_id) {
      res.statusCode = 422;
      throw new Error(" 'docente_id' e 'especialidade_id' são obrigatórios");
    }

    const result = await connection("maryam_docenteEspecialidade").insert({
      id: Date.now().toString(),
      docente_id,
      especialidade_id
    });    

    res.status(200).send(result);

  } catch (error: any) {
    if(res.statusCode === 200){
      res.status(500).send("Ocorreu um erro inesperado!")
  }else{
      res.send(error.message)
  }
  }
}

