const express = require("express");
const app = express();
const data = require("./data/data");
const port = process.env.PORT || 8000;
const cors = require("cors");

app.use(cors());

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  res.send(data.products.find((x) => x._id == req.params.id));
});

app.listen(port, () => {
  console.log(`Server started at ${port} `);
});
