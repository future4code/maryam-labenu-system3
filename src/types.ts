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
<<<<<<< HEAD
=======



/////////testando interfaces//////////////////////////////////////////////
export interface Hobbie {
  hobbie_id: string;
  hobbie_name: string;
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
>>>>>>> 422431145b9fa048d05846e17f475b23b32e74ec
