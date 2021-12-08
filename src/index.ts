import app from "./app"
import { createStudent } from "./endpoints/createStudent";
import { getAllStudents } from "./endpoints/getAllStudents";


app.get("/students", getAllStudents);
app.post("/students", createStudent);
