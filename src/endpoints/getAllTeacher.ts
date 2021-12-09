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

    const result = await connection("maryam_docentes")
    // .select date_format(curdate(), '%m/%d/%Y')

    const teacher = result.map(newTeacher);

    res.status(200).send(teacher);

  } catch (error: any) {
    if(res.statusCode === 200){
        res.status(500).send("Ocorreu um erro inesperado!")
    }else{
        res.send(error.message)
    }
  }
}

