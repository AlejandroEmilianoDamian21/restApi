import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import clientRoutes from "../src/routes/client.routes.js"

const app = express();
const port = 3307;

app.use(indexRoutes);
app.use(employeesRoutes);
app.use(clientRoutes);
app.use(express.json())

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
