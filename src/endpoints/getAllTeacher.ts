import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllTeacher(
    req: Request,
    res: Response
    ): Promise<void> {
        
        try {

    const result = await connection("maryam_docenteEspecialidade")
    .innerJoin("maryam_docentes", "maryam_docentes.id" ,"maryam_docenteEspecialidade.docente_id")
    .innerJoin("maryam_turma", "maryam_turma.id", "maryam_docentes.turma_id")
    .innerJoin("maryam_especialidade", "maryam_especialidade.id", "maryam_docenteEspecialidade.especialidade_id")
    .select(["maryam_docentes.name","maryam_docentes.email", 
    "maryam_docentes.data_nasc as DATE_FORMAT(data_nasc, '%d/%m/%Y')", 
    "maryam_especialidade.name as maryam_docenteEspecialidade.docente_id",
    "maryam_turma.name as maryam_docentes.turma_id", "maryam_turma.modulo"])
    

    res.status(200).send(result);

  } catch (error: any) {
    if(res.statusCode === 200){
        res.status(500).send("Ocorreu um erro inesperado!")
    }else{
        res.send(error.message)
    }
  }
}

