import { Request, Response } from "express"
import { connection } from "../../data/connection"

export const createTurma = async (
    req: Request,
     res: Response
     ) => {
    try {

        const { name, modulo } = req.body

        if (!name || !modulo) {
            res.status(406)
            throw new Error(" 'name', 'modulo' são obrigatórios")
        }

        if (modulo > 5 || modulo < 0) {
            res.status(406)
            throw new Error("Módulo inválido! Insira um módulo entre 0 e 5.")
        }

        await connection('maryam_turma')
            .insert({
                id: Date.now().toString(),
                name,
                modulo: modulo === 0 ? 0 : modulo
            })

        res.status(201).send("Turma criada!")

    } catch (error:any) {
        res.send(error.sqlMessage || error.message)
    }
}