import app from "./app"
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { getAllStudents } from "./endpoints/getAllStudents";
import { getAllTeacher } from "./endpoints/getAllTeacher";
import { updateTeacher } from "./endpoints/updateTeacher";


app.get("/students", getAllStudents);
app.post("/students", createStudent);

app.get("/teacher", getAllTeacher);
app.post("/teacher", createTeacher);
app.put("/teacher/:id", updateTeacher)