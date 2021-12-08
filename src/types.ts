export type Especialidade = {
    id: string,
    nome: string
}

export type Hobby = {
    id: string,
    nome: string
}

export type Docente = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
}

export type Turma = {
    id: string,
    nome: string,
    modulo: string
}
