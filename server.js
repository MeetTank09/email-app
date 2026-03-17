const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5050;

// middleware
app.use(express.json());
app.use(express.static(__dirname));

// API to save email
app.post("/save-email", (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  fs.appendFile("email.txt", email + "\n", (err) => {
    if (err) {
      return res.status(500).json({ message: "Error saving email" });
    }
    res.json({ message: "Email saved to email.txt" });
  });
});

// API to read emails
app.get("/get-emails", (req, res) => {
  fs.readFile("email.txt", "utf8", (err, data) => {
    if (err) {
      return res.json([]);
    }
    const emails = data.split("\n").filter(e => e !== "");
    res.json(emails);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
