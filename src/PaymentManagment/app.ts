import express, { Application } from "express";
import cors from "cors";
import { TransactionRouter } from "./Infraestructure/Routes/TransactionRouter";
import {Signale} from "signale";


const app:Application = express();
const signale = new Signale();

app.use(express.json());
app.use(cors());

app.use('/payments/api/v1/transactions', TransactionRouter);

const PORT:number = Number(process.env.PORT || 3000);
const HOST:string = process.env.HOST_SERVER || '0.0.0.0';
let server = null;

async function startServer() {
    server = app.listen(PORT, HOST, () => {
        signale.success(`Server running on http://${HOST}:${PORT}`);
    });
}
startServer();