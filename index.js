import express from "express";
import dotenv from "dotenv";
import myrouting from "./routes/route.js";
import workingTime from "./middlewares/workingTime.js";

const app = express();
dotenv.config();
app.use(workingTime);

app.use(myrouting);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} `);
});
