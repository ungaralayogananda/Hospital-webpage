const express = require("express");
const app = express();

// Middleware to read JSON data from request body
app.use(express.json());

/* =====================
   REQUEST METHODS
   ===================== */

// GET request
app.get("/", (req, res) => {
  res.send("GET request received");
});

// GET with query parameters
app.get("/user", (req, res) => {
  const name = req.query.name;
  res.send(`Hello ${name}`);
});

// POST request
app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.json({
    result: a + b
  });
});

// PUT request
app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Data updated for ID: ${id}`);
});

// DELETE request
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Data deleted for ID: ${id}`);
});

/* =====================
   RESPONSE METHODS
   ===================== */

app.get("/responses", (req, res) => {
  res.status(200);              // set status code
  res.set("Custom-Header", "NodeJS");
  res.json({
    message: "Response methods example"
  });
});

// Server execution
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});