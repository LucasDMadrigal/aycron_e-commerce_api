import MongoPurchaseRepository from "../../infrastructure/mongoPurchaseRepository.js";

const purchaseRepository = new MongoPurchaseRepository();

const getPurchasesByUserIdUseCase = async (userId) => {
    const purchase = await purchaseRepository.getPurchasesByUserId(userId);

    if (!purchase) {
        return { statusCode: 404, payload: "Purchase not found" };
    }

    return { statusCode: 200, payload: purchase };
}

export default getPurchasesByUserIdUseCase;