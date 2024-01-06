import express from "express";
import cors from "cors";
import parseRoute from "./RouteParser.js";

const app = express();
const port = 8080;

app.use(cors());


app.post("/:format/:fields", async (req, res) => {
    res.send(await parseRoute(req.params.format, req.params.fields)).status(200);
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });