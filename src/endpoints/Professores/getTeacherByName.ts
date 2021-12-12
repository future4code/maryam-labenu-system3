import { Request, Response } from "express";
import { connection } from "../../data/connection";
import { Docente } from "../../types";

export async function getTeacherByName(
    req: Request,
    res: Response
    ): Promise<void> {
        
        try {
    const name = req.params
    const docente: Docente[] = await connection("maryam_docentes")
    .where( name)

    const result = await connection.raw(
      `SELECT maryam_docentes.id,
      maryam_docentes.name as result, 
      maryam_docentes.email, 
      DATE_FORMAT(data_nasc, '%d/%m/%Y'), 
      maryam_docentes.turma_id as turma, 
      maryam_especialidade.name as especialidade  
         FROM maryam_docentes 
         INNER JOIN maryam_docenteEspecialidade ON maryam_docentes.id = maryam_docenteEspecialidade.docente_id
         INNER JOIN maryam_especialidade ON maryam_docenteEspecialidade.especialidade_id = maryam_especialidade.id 
`
    );

    if (!docente[0]) {
      res.statusCode = 409;
      throw new Error("Teacher não cadastrado");
    }

    const especialidadeResult: any = [];

    for (let results of result[0]) {
      const eachEspecialidade: any = results.especialidade 
      especialidadeResult.push(eachEspecialidade);
    }
    res.status(200).send({
      Docente: docente,
      Especialidade: especialidadeResult,
    });

  } catch (error: any) {
        res.send(error.message)
    
  }
}

