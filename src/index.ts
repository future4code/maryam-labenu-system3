import app from "./app";
import { createEspecialidadeDocente } from "./endpoints/createEpecialidadeDocente";
import { createEspecialidade } from "./endpoints/createEspecialidade";
import { createStudent } from "./endpoints/createStudent";
import { createStudentHobby } from "./endpoints/createStudentHobby";
import { createTeacher } from "./endpoints/createTeacher";
import { getAllEspecialidade } from "./endpoints/getAllEspecialidade";
import { getStudentByName } from "./endpoints/getStudentByName";
import { getAllEspecialidadeDocente } from "./endpoints/getAllEspecialidadeDocente";
import { getAllStudents } from "./endpoints/getAllStudents";
import { getTeacherById } from "./endpoints/getTeacherById";
import { updateTeacher } from "./endpoints/updateTeacher";
import { updateStudentClass } from "./endpoints/updateStudentClass";
import {updateTeacher} from "./endpoints/updateTeacher"



app.get("/student/:name", getStudentByName);
app.post("/students", createStudent);
app.put("/student/:id", updateStudentClass);
app.post("/hobby", createStudentHobby);

app.post("/teacher", createTeacher);
app.get("/teacher/:id", getTeacherById);
app.put("/teacher/:id", updateTeacher);

app.get("/especialidade", getAllEspecialidade);
app.post("/especialidade", createEspecialidade);


app.get("/especialidade", getAllEspecialidade)
app.post("/especialidade", createEspecialidade)

app.get("/teacher/especialista", getAllEspecialidadeDocente)
app.post("/teacher/especialista", createEspecialidadeDocente)


