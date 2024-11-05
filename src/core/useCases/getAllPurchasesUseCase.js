import MongoPurchaseRepository from "../../infrastructure/mongoPurchaseRepository";

const purchaseRepository = new MongoPurchaseRepository();

const getAllPurchasesUseCase = async () => {
    const purchases = await purchaseRepository.findAll();
    return { statusCode: 200, payload: purchases };
}