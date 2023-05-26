import { app } from "./app.js";
import morgan from "morgan"
import express from "express";
import { PORT } from "./config.js";
import cors from "cors"

const App = express();

App.use(cors());

App.use(app);

App.use(morgan("dev"));

App.listen(PORT);

console.log('port open on', PORT);