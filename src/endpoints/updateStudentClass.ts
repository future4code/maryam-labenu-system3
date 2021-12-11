import { Request, Response } from "express";
import { connection } from "../data/connection";

export const updateStudentClass = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { turma_id } = req.body;

    if (!turma_id) {
      res.statusCode = 422;
      throw new Error("O 'id' da 'turma_id' são obrigatórios");
    }

    await connection("maryam_estudantes").where("id", `${id}`).update({
      turma_id,
    });
    res.status(200).send("Estudante trocado de turma com sucesso!");
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Ocorreu um erro inesperado!");
    } else {
      res.send(error.message);
    }
  }
};
