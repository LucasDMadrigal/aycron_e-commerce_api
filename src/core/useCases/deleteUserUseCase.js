import MongoUserRepository from "../../infrastructure/mongoUserRepository.js";
const deleteUserUseCase = async (id) => {
    const user = await userRepository.delete(id);
    
    if (!user) {
        return { statusCode: 404, payload: "User not found" };
    }
    
    return { statusCode: 200, payload: user };
}

export default deleteUserUseCase