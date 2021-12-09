import { Request, Response } from "express";
import { connection } from "../data/connection";

export const createTeacher = async (req: Request, res: Response) => {
  try {
    const id = Date.now().toString();

    let { name, email, data_nasc, turma_id } = req.body;

    if (!id || !name || !email || !data_nasc || !turma_id) {
      res.statusCode = 422;
      throw new Error(
        " 'id', 'name', 'email', 'data_nasc' e 'turma_id' são obrigatórios"
      );
    }

    if (!email.includes("@")) {
      res.statusCode = 422;
      throw new Error("Formato de email inválido");
    }

    const formatDefaultDate = (data: any) => {
      let arrayDate = data && data.split("/");
      let [year, month, day] = [
        arrayDate && arrayDate[2],
        arrayDate && arrayDate[1],
        arrayDate && arrayDate[0],
      ];
      let usefullDate = `${year}-${month}-${day}`;
      return usefullDate;
    };
    formatDefaultDate(data_nasc);

    const formatDate = () => {
      const todayDate = new Date().toISOString();
      let nwd = todayDate && todayDate.split("-");
      let [year, month, newdt] = [
        nwd && nwd[0],
        nwd && nwd[1],
        nwd && nwd[2].split("T"),
      ];
      let [day] = [newdt && newdt[0], newdt && newdt[1].split(".")];
      let currentData: string = `${year}-${month}-${day}`;
      return currentData;
    };

    const date = formatDate();
    data_nasc = formatDefaultDate(data_nasc);

    if (formatDefaultDate(data_nasc).valueOf() < date.valueOf()) {
      res.statusCode = 422;
      throw new Error(`A deadline must be later than the current date.`);
    }

    await connection("maryam_docentes").insert({
      id: Date.now().toString(),
      name,
      email,
      data_nasc,
      turma_id,
    });
    res.status(200).send("Teacher criado");
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Ocorreu um erro inesperado!");
    } else {
      res.send(error.message);
    }
  }
};

function currentData(currentData: any) {
  throw new Error("Function not implemented.");
}
