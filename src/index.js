import "dotenv/config";
import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import route from "./routes/index.js";
import db from "./config/app/index.js";
import cors from "cors";

// Init sever
const app = express();
// Define Port server
const PORT = process.env.PORT;

// Handle req data is json
app.use(express.json({ limit: "50mb" }));
// Handle req data is form
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// Config cors for brower
app.use(
  cors({
    origin: process.env.REACT_URL_CLIENT,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: [
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, X-Requested-With, Content-Type, Accept",
    ],
    optionsSuccessStatus: 204,
    credentials: true,
  })
);

//Config static paths
app.use(express.static(path.join("src", "public")));
// set view SSR
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join("src", "resource", "views"));

//Connect database
db.ConnectBD();
//Manager router in server
route(app);
// Return 404 if url incorrect!
app.use((req, res) => {
  return res.send("404 Not found!");
});
// Run server at the port !
app.listen(PORT, () => {
  console.log(`Sever is running at http://localhost:${PORT}`);
});
