import { connection } from "./connection";
import estudantes from "./estudantes.json";
import turmas from "./turmas.json"
import docentes from "./docentes.json"
import especialidades from "./especialidades.json"
import docenteEspecialidade from "./docenteEspecialidade.json"

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

const createTables = () =>
  connection
    .raw(
      `
      CREATE TABLE IF NOT EXISTS maryam_estudantes (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE NOT NULL,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (turma_id) REFERENCES maryam_turma(id)
      );

      CREATE TABLE IF NOT EXISTS maryam_Hobbies (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE
      );

      CREATE TABLE IF NOT EXISTS maryam_estudantes_Hobbies (
        id VARCHAR(255) PRIMARY KEY,
        student_id VARCHAR(255) NOT NULL,
        hobbie_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (student_id) REFERENCES maryam_estudantes(id),
        FOREIGN KEY (hobbie_id) REFERENCES maryam_Hobbie(id)
      );

      CREATE TABLE IF NOT EXISTS maryam_turma (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255),
        modulo VARCHAR(255) DEFAULT 0
      );

      CREATE TABLE IF NOT EXISTS maryam_docentes (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE NOT NULL,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (turma_id) REFERENCES maryam_turma(id)
      );

      CREATE TABLE IF NOT EXISTS maryam_especialidade (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS maryam_docenteEspecialidade (
        id VARCHAR(255) PRIMARY KEY,
        docente_id VARCHAR(255) NOT NULL,
        especialidade_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (docente_id) REFERENCES maryam_docentes(id),
        FOREIGN KEY (especialidade_id) REFERENCES maryam_especialidade(id)
      );
`
    )
    .then(() => {
      console.log("Tabelas criadas");
    })
    .catch(printError);

const insertEstudantes = () =>
  connection("maryam_estudantes")
    .insert(estudantes)
    .then(() => {
      console.log("Usuários criados");
    })
    .catch(printError);

const insertTurmas = () =>
  connection("maryam_turma")
    .insert(turmas)
    .then(() => {
      console.log("Turmas criadas");
    })
    .catch(printError);

 const insertDocentes = () =>
  connection("maryam_docentes")
    .insert(docentes)
    .then(() => {
      console.log("Docentes criadas");
    })
    .catch(printError);


    const insertEspecialidade = () =>
    connection("maryam_especialidade")
      .insert(especialidades)
      .then(() => {
        console.log("Especialidades criadas");
      })
      .catch(printError);

      const insertDocente_Especialidade = () =>
      connection("maryam_docenteEspecialidade")
        .insert(docenteEspecialidade)
        .then(() => {
          console.log("Docente_Especialidade criadas");
        })
        .catch(printError);

 const insertHobbies = () =>
   connection("maryam_Hobbies")
     .insert(docentes)
     .then(() => {
       console.log("Hobbies criadas");
     })
     .catch(printError);


const closeConnection = () => {
  connection.destroy();
};

createTables().then(insertEstudantes).finally(closeConnection);
createTables().then(insertTurmas).finally(closeConnection);
createTables().then(insertDocentes).finally(closeConnection);
createTables().then(insertEspecialidade).finally(closeConnection);
createTables().then(insertDocente_Especialidade).finally(closeConnection);
createTables().then(insertHobbies).finally(closeConnection);


