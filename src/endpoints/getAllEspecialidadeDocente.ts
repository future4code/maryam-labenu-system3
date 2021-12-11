import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllEspecialidadeDocente(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection("maryam_docenteEspecialidade");

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

