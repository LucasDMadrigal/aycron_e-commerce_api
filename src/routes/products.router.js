import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.get("/:id", (req, res) => {

    const id  = req.params.id

    const product = products.find(product => product.id == id)

    if (!product) {
        res.status(404).send("Product not found");
    } else {
        res.status(200).send(product);
    }

});

router.post("/", (req, res) => {
    res.send("Hello World!");
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const product = req.body;
    const index = products.findIndex(product => product.id == id);
    products[index] = product;
    res.status(200).send(product);
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const index = products.findIndex(product => product.id == id);
    products.splice(index, 1);
    res.status(204).send();
});

export default router;