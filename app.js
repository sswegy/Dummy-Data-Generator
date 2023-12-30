import express from "express";
import cors from "cors";


const app = express();
const port = 8080;

app.use(cors());


app.get("/test", async (req, res) => {
    res.send("test").status(200);  
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });