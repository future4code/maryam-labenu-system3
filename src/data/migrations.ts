import { connection } from "./connection";
import estudantes from "./estudantes.json";

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

const closeConnection = () => {
  connection.destroy();
};

createTables().then(insertEstudantes).finally(closeConnection);
