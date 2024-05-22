const express = require("express");
const cors = require("cors");

const app = express();

const router = express.Router();

const data = require("./data");

app.use(cors());

router.get("/api/list", (req, res) => {
  res.json({ data });
});

app.use(router);

app.listen(3006, () => {
  console.log("server is running at 3000");
});
