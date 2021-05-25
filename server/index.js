const express = require("express");
const http = require("http");
const morgan = require("morgan");
const router = require("./router");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

router(app);

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
