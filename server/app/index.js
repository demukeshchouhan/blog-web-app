require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5100;
const HOST = process.env.HOST || "0.0.0.0";

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Express server@@!!");
});

app.get("/hello-app", (req, res) => {
  res.send({
    message: "Hello from Express",
    status: "success",
    statusCode: 200,
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
