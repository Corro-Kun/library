import { app } from "./app.js";
import morgan from "morgan"
import express from "express";

const App = express();

App.use(app);

App.use(morgan("dev"));

App.listen(3000);

console.log('port open on 3000');