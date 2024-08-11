const express = require("express");
const app = express();
const products = require('./products.json').products;
const carts = require('./carts.json').carts;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * importar productos del archivo products.json
 */



app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/products", (req, res) => {
    res.status(200).send(products);
});

app.get("/api/products/:id", (req, res) => {

    const id  = req.params.id

    const product = products.find(product => product.id == id)

    if (!product) {
        res.status(404).send("Product not found");
    } else {
        res.status(200).send(product);
    }

});

app.post("/api/products", (req, res) => {
    const product = req.body;
    // products.push(product);

    res.status(201).send(product);
});

app.put("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const product = req.body;
    const index = products.findIndex(product => product.id == id);
    products[index] = product;
    res.status(200).send(product);
});

app.delete("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const index = products.findIndex(product => product.id == id);
    products.splice(index, 1);
    res.status(204).send();
});


/***
 * 
 * CART API
 * 
 */


app.get("/api/cart/:cid", (req, res) => {

    const cid  = req.params.cid

    const cart = carts.find(cart => cart.id == cid)

    if (!cart) {
        res.status(404).send("Cart not found");
    } else {
        res.status(200).send(cart);
    }

});

app.post("/api/cart", (req, res) => {
    const cart = req.body;

    carts.push(cart);
    res.status(201).send(cart);

});

app.post("/api/cart/:cid/product/:pid", (req, res) => {
    const cid = req.params.cid;
    const pid = req.params.pid;
    const cart = carts.find(cart => cart.id == cid);
    const product = products.find(product => product.id == pid);
    if (!cart) {
        res.status(404).send("Cart not found");
    } else if (!product) {
        res.status(404).send("Product not found");
    } else {
        const productId = cart.products.findIndex(product => product.id == pid);
        if(productId != -1) {
            cart.find((item) => item.id == pid).quantity++;
            res.status(200).send(cart);
        } else {
            cart.products.push(product);
            res.status(201).send(cart);
        }
        res.status(201).send(cart);
    }
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});