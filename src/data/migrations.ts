import { connection } from "./connection";
import estudantes from "./estudantes.json";
import turmas from "./turmas.json"
import docentes from "./docentes.json"

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

const createTables = () =>
  connection
    .raw(
      `
      CREATE TABLE IF NOT EXISTS maryam_estudantes (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) UNIQUE NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
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

const closeConnection = () => {
  connection.destroy();
};

createTables().then(insertEstudantes).finally(closeConnection);
createTables().then(insertTurmas).finally(closeConnection);
createTables().then(insertDocentes).finally(closeConnection);

