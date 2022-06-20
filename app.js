require("dotenv").config();
const express = require("express");
const cors = require("cors");
const issuesRouter = require("./Routers/issuesRouter");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api", issuesRouter);

app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
