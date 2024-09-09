import express from "express";
import ProductRouter from "./routes/products.router.js";
import CartsRouter from "./routes/carts.router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * importar productos del archivo products.json
 */


app.use("/products", ProductRouter);

app.use("/carts", CartsRouter);

app.listen(8080, () => {
    console.log("Server started on port 8080");
});