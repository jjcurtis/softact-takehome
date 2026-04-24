import express from "express";
import tasks from "./tasks";
import cors from "cors"

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error.stack)
    }
});
