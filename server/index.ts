import express from "express"
import AppRouter from "./routes";
import cors from "cors";

const app = express();
const port = 80;

app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}));

app.use(AppRouter);

app.get('/', (req, res) => {
  res.send("Backend is running.")
});

app.listen(port, () => {
  console.log(`Server listening at ${port}`)
});