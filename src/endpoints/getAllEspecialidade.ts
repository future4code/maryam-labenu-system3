import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Especialidade } from "../types";

const toEspecialidade = (input: any): Especialidade => {
    return {
      id: input.id,
      name: input.name
    }
}

export async function getAllEspecialidade(req: Request, res: Response): Promise<void> {

  try {
    const result = await connection("maryam_especialidade");

    const especialidade = result.map(toEspecialidade);

    res.status(200).send(especialidade);
  } catch (error: any) {
    if(res.statusCode === 200){
        res.status(500).send("Ocorreu um erro inesperado!")
    }else{
        res.send(error.message)
    }
}

}

