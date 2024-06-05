import express, { Application } from "express";
import cors from "cors";

const app:Application = express();

app.use(express.json());
app.use(cors());

const port:string = process.env.PORT || '3000';

app.listen(port, () => {
    console.log(`SERVER RUNNING IN http://localhost:${port}.`);
});