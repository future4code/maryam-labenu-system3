import { Request, Response } from "express";
import { connection } from "../../data/connection";
import { Estudante } from "../../types";

export async function getStudentByName(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name } = req.params;
    const estudante: Estudante[] = await connection("maryam_estudantes").where({
      name: name,
    });

    if (!estudante[0]) {
      res.statusCode = 409;
      throw new Error("Estudante não cadastrado");
    }

    const results = await connection.raw(
      `SELECT maryam_estudantes.id,
         maryam_estudantes.name as estudante, 
         maryam_estudantes.email, 
         maryam_estudantes.data_nasc, 
         maryam_estudantes.turma_id as turma, 
         maryam_Hobbies.name as hobby  
         FROM maryam_estudantes 
         INNER JOIN maryam_estudantes_Hobbies ON maryam_estudantes.id = maryam_estudantes_Hobbies.student_id
         INNER JOIN maryam_Hobbies ON maryam_estudantes_Hobbies.hobbie_id = maryam_Hobbies.id 
         WHERE maryam_estudantes.id = ${estudante[0].id}
`
    );

    const hobbieResult: any = [];

    for (let result of results[0]) {
      const eachHobbie: any = result.hobby;
      hobbieResult.push(eachHobbie);
    }
    res.status(200).send({
      Estudante: estudante[0],
      Hobby: hobbieResult,
    });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Ocorreu um erro inesperado!");
    } else {
      res.send(error.message);
    }
  }
}
