import express, { Application } from "express";
import cors from "cors";
import { TransactionRouter } from "./Infraestructure/Routes/TransactionRouter";

const app:Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/transactions', TransactionRouter);

const port:string = process.env.PORT || '3000';

app.listen(port, () => {
    console.log(`SERVER RUNNING IN http://localhost:${port}.`);
});