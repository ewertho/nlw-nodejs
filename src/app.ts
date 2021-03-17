import "reflect-metadata";
import express from "express";
import createConnection from "./database";
import { router } from "./route";

const app = express();

createConnection();
app.use(express.json());

app.use(router);

export { app };
