import express from "express";
import postRouter from "./routes/posts.router.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", [postRouter]);

app.listen(PORT, () => {
    console.log(`Server listen ${PORT}`);
});
