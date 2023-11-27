import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import "./database";
import services from "./routes/services.routes";
import products from "./routes/products.routes";
import users from "./routes/users.routes";
import "dotenv/config"

const app = express();
app.set("port", process.env.PORT || 4001);
app.listen(app.get("port"), () => {
  console.log("=================================");
  console.log("servidor escuchando en puerto " + app.get("port"));
  console.log("=================================");
});

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public/index.html")));


app.use("/apex-v1/services", services);
app.use("/apex-v1/products", products);
app.use("/apex-v1/users", users);
