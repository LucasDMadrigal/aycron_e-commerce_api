import express from "express";
import ProductRouter from "./routes/products.router.js";
import CartsRouter from "./routes/carts.router.js";
import userRouter from './routes/users.router.js'
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * importar productos del archivo products.json
 */


app.use("/api/products", ProductRouter);

app.use("/api/carts", CartsRouter);

app.use("/api/user", userRouter)

connectDB();


app.listen(process.env.PORT, () => {
    console.log("Server started on port "+process.env.PORT);
});