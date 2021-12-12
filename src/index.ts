import app from "./app"
import { createEspecialidadeDocente } from "./endpoints/createEpecialidadeDocente";
import { createEspecialidade } from "./endpoints/createEspecialidade";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { getAllEspecialidade } from "./endpoints/getAllEspecialidade";
import { getAllEspecialidadeDocente } from "./endpoints/getAllEspecialidadeDocente";
import { getAllStudents } from "./endpoints/getAllStudents";
import { getTeacherById } from "./endpoints/getTeacherById";
import { updateTeacher } from "./endpoints/updateTeacher";


app.get("/students", getAllStudents);
app.post("/students", createStudent);

app.post("/teacher", createTeacher);
app.get("/teacher/:id", getTeacherById);
app.put("/teacher/:id", updateTeacher)

app.get("/especialidade", getAllEspecialidade)
app.post("/especialidade", createEspecialidade)

app.get("/teacher/especialista", getAllEspecialidadeDocente)
app.post("/teacher/especialista", createEspecialidadeDocente)

