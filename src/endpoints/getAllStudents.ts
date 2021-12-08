import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Estudante } from "../types";

export async function getAllStudents(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection("maryam_estudantes");

    const users = result.map(toUser);

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

const toUser = (input: any): Estudante => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    password: input.password,
  };
};
