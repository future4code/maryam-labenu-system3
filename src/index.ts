import app from "./app"
import { createEspecialidadeDocente } from "./endpoints/createEpecialidadeDocente";
import { createEspecialidade } from "./endpoints/createEspecialidade";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { getAllEspecialidade } from "./endpoints/getAllEspecialidade";
import { getAllEspecialidadeDocente } from "./endpoints/getAllEspecialidadeDocente";
import { getAllStudents } from "./endpoints/getAllStudents";
import { getAllTeacher } from "./endpoints/getAllTeacher";
import { updateTeacher } from "./endpoints/updateTeacher";


app.get("/students", getAllStudents);
app.post("/students", createStudent);

app.get("/teacher", getAllTeacher);
app.post("/teacher", createTeacher);
app.put("/teacher/:id", updateTeacher)

app.get("/especialidade", getAllEspecialidade)
app.post("/especialidade", createEspecialidade)

app.get("/teacher/especialista", getAllEspecialidadeDocente)
app.post("/teacher/especialista", createEspecialidadeDocente)

