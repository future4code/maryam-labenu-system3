import { Request, Response } from "express";
import { connection } from "../data/connection";

export const createEspecialidade = async (
    req: Request,
     res: Response
     ) => {
  try {
    const { name } = req.body;

    const [especialidade] = await connection("maryam_especialidade")
        .where({name: name.toLowerCase( )})

        if(especialidade){
            res.statusCode = 409
            throw new Error("Especialidade já cadastrado!");

        }

    if (!name) {
      res.statusCode = 422;
      throw new Error(" 'name' é obrigatórios");
    }

    await connection("maryam_especialidade").insert({
      id: Date.now().toString(),
      name
    });

    res.send("Especialidade criada");

  } catch (error) {
    console.log(error);
    if (res.statusCode === 200)
      res.status(500).send("Um erro inesperado ocorreu");
    else res.send(error);
  }
};