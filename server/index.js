const path = require("path");
const express = require("express");

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(express.json());

// POST ENDPOINT TO REVERT STRING
app.post("/data", (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Bad Request" });
  }
  const revertedMessage = message.split("").reverse().join("");
  return res.json({ data: revertedMessage });
});

// APP ENDPOINT TO SHOW FORM
app.get("/app", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 8000 by default
app.listen(port, () => {
  console.log("server started on port: " + port);
});
