import mongoPurchaseRepository from "../../infrastructure/mongoPurchaseRepository.js";

const purchaseRepository = new mongoPurchaseRepository();

const getPurchaseByIdUseCase = async (id) => {
    const purchase = await purchaseRepository.findById(id);

    if (!purchase) {
        return { statusCode: 404, payload: "Purchase not found" };
    }

    return { statusCode: 200, payload: purchase };
};