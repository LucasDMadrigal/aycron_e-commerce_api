import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.get("/:cid", (req, res) => {

    const cid  = req.params.cid

    const cart = carts.find(cart => cart.id == cid)

    if (!cart) {
        res.status(404).send("Cart not found");
    } else {
        res.status(200).send(cart);
    }

});

router.put("/:cid", (req, res) => {
    const cid = req.params.cid;
    const cart = req.body;
    const index = carts.findIndex(cart => cart.id == cid);
    if (index == -1) {
        res.status(404).send("Cart not found");
    } else {
        carts[index] = cart;
        res.status(200).send(cart);
    }
});


router.post("/:cid/product/:pid", (req, res) => {
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

router.post("/", (req, res) => {
    res.send("Hello World!");
});

export default router;