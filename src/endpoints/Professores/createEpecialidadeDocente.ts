import { Request, Response } from "express";
import { connection } from "../../data/connection";

export const createEspecialidadeDocente= async (
  req: Request,
   res: Response
   ) => {
  try {
    const { docente_id, especialidade_id } = req.body;
    const [Teacher_Especialidade] = await connection(
      "maryam_docenteEspecialidade"
    ).where({ docente_id, especialidade_id });

    if (Teacher_Especialidade) {
      res.statusCode = 409;
      throw new Error("Especialidade já cadastrado para esse Professor");
    }

    if (!docente_id && !especialidade_id) {
      res.statusCode = 422;
      throw new Error(" Os 'docente_id' do 'especialidade_id' e do estudante são obrigatórios");
    }

    await connection("maryam_docenteEspecialidade").insert({
      id: Date.now().toString(),
      docente_id,
      especialidade_id,
    });

    res.status(200).send("Especialidade foi adicionado ao Professor");
  } catch (error: any) {
    
      res.send(error.message);
    
  }
};

