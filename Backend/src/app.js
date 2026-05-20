import express from "express";
import http from "http";
import cors from "cors";
import { signupController } from "./controllers/signupController.js";
import { loginController } from "./controllers/loginController.js";


const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.post("/signup", signupController);
app.post("/login", loginController);

export default app;
