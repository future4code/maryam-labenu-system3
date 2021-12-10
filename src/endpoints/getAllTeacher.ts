import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Docente } from "../types";

const newTeacher = (teacher: any): Docente => {
    return {
      id: teacher.id,
      name: teacher.name,
      email: teacher.email,
      data_nasc: teacher.data_nasc,
      turma_id: teacher.turma_id,
    };
  };

export async function getAllTeacher(
    req: Request,
    res: Response
    ): Promise<void> {
        
        try {

    const [result] = await connection.raw(`
    SELECT id, name, email, DATE_FORMAT(data_nasc, "%d/%m/%Y") as data_nasc, turma_id FROM maryam_docentes`)

    res.status(200).send(result);

  } catch (error: any) {
    if(res.statusCode === 200){
        res.status(500).send("Ocorreu um erro inesperado!")
    }else{
        res.send(error.message)
    }
  }
}

