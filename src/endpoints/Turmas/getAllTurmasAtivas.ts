import { connection } from "../../data/connection"
import { Request, Response } from "express"
import { Turma } from "../../types"

export const getAllTurmasAtivas = async (
    req: Request,
     res: Response
     ) => {
  try {
    const turmas: Turma[] = await connection("maryam_turma")
    .where('modulo','>=',0)
    
    res.send(turmas)
    
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
}