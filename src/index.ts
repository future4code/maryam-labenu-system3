import app from "./app";
import { createEspecialidadeDocente } from "./endpoints/Professores/createEpecialidadeDocente";
import { createStudent } from "./endpoints/Estudantes/createStudent";
import { createStudentHobby } from "./endpoints/Estudantes/createStudentHobby";
import { createTeacher } from "./endpoints/Professores/createTeacher";
import { getStudentByName } from "./endpoints/Estudantes/getStudentByName";
import { getTeacherByName } from "./endpoints/Professores/getTeacherByName";
import { updateTeacher } from "./endpoints/Professores/updateTeacher";
import { updateStudentClass } from "./endpoints/Estudantes/updateStudentClass";
import { createTurma } from "./endpoints/Turmas/createTurma";
import { getAllTurmasAtivas } from "./endpoints/Turmas/getAllTurmasAtivas";

app.post("/class", createTurma)
app.get("/class", getAllTurmasAtivas)
app.put("/class/:id", updateTurma)

app.get("/student/:name", getStudentByName);
app.post("/students", createStudent);
app.put("/student/:id", updateStudentClass);
app.post("/hobby", createStudentHobby);

app.post("/teacher", createTeacher);
app.get("/teacher/:name", getTeacherByName);
app.put("/teacher/:id", updateTeacher);
app.post("/teacher/especialista", createEspecialidadeDocente)


function updateTurma(arg0: string, updateTurma: any) {
    throw new Error("Function not implemented.");
}

