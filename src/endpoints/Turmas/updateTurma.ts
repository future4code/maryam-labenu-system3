import { connection } from "../../data/connection"
import { Request, Response } from "express"

export const UpdateTurma = async(
    req: Request,
     res: Response
     ) => {
            try {
                const {name, modulo} = req.body;
                const id = req.params

                if (!name || !modulo) {
                    res.statusCode = 422;
                    throw new Error(" 'name' e 'modulo' são obrigatórios")
                };
        await connection("maryam_turma")
        .where("id", `${id}`)
        .update({
            name,
            modulo
          })

    res.status(200).send("Módulo da turma atualizado com sucesso");

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}