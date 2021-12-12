export type Especialidade = {
  id: string;
  name: string;
};

export type Hobby = {
  id: string;
  name: string;
};

export type Docente = {
  id: string;
  name: string;
  email: string;
  data_nasc: string;
  turma_id: string;
};

export type Turma = {
  id: string;
  name: string;
  modulo: string;
};

export type Estudante = {
  id: string;
  name: string;
  email: string;
  data_nasc: string;
  turma_id: string;
};

export interface Hobbie {
  hobbie_id: string;
  hobbie_name: string;
}

export interface Especialist {
  especialidade_id: string;
  docente_id: string;
}

export interface Pessoa {
  id: string;
  name: string;
  email: string;
  data_nasc: string;
  turma_id: string;
}

class EstudanteHobbie implements Pessoa, Hobbie {
  id: string;
  name: string;
  email: string;
  data_nasc: string;
  turma_id: string;
  hobbie_id: string;
  hobbie_name: string;
  constructor(
    id: string,
    name: string,
    email: string,
    data_nasc: string,
    turma_id: string,
    hobbie_id: string,
    hobbie_name:string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.data_nasc = data_nasc;
    this.turma_id = turma_id;
    this.hobbie_id = hobbie_id;
    this.hobbie_name = hobbie_name;
  }
}

class DocenteEspecialista implements Pessoa, Especialist {
  id: string;
  name: string;
  email: string;
  data_nasc: string;
  turma_id: string;
  especialidade_id: string;
  docente_id: string;
  constructor(
    id: string,
    name: string,
    email: string,
    data_nasc: string,
    turma_id: string,
    especialidade_id: string,
    docente_id: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.data_nasc = data_nasc;
    this.turma_id = turma_id;
    this.especialidade_id = especialidade_id;
    this.docente_id = docente_id;
  }
}
