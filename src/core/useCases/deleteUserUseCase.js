import userRepository from "../repositories/user.repository.js";
const deleteUserUseCase = async (id) => {
    const user = await userRepository.delete(id);
    
    if (!user) {
        return { statusCode: 404, message: "User not found" };
    }
    
    return { statusCode: 200, payload: user };
}

export default deleteUserUseCase