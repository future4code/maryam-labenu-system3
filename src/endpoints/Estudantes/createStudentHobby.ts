import { Request, Response } from "express";
import { connection } from "../../data/connection";

export const createStudentHobby = async (req: Request, res: Response) => {
  try {
    const { student_id, hobbie_id } = req.body;
    const [Student_hobbies] = await connection(
      "maryam_estudantes_Hobbies"
    ).where({ student_id, hobbie_id });

    if (Student_hobbies) {
      res.statusCode = 409;
      throw new Error("Hobby já cadastrado para esse estudante");
    }

    if (!student_id && !hobbie_id) {
      res.statusCode = 422;
      throw new Error(" Os ids do hobby e do estudante são obrigatórios");
    }

    await connection("maryam_estudantes_Hobbies").insert({
      student_id,
      hobbie_id,
    });

    res.status(200).send("Hobby foi adicionado ao estudante");
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Ocorreu um erro inesperado!");
    } else {
      res.send(error.message);
    }
  }
};
