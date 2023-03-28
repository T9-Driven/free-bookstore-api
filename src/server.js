import express, { json } from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();
app.use(json());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
