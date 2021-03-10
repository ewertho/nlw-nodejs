import express from "express";

const app = express();

const port = process.env.PORT || 3300;

app.use("/", (req, res) => res.json({ ok: true }));

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
