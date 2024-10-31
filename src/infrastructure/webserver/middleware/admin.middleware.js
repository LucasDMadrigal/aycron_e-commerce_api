const adminMiddleware = (req, res, next) => {
  // Verificar si el usuario está autenticado y tiene rol de admin
  if (req.user && req.user.isAdmin) {
    next(); // El usuario es admin, continuar con la ejecución
  } else {
    return res.status(403).json({ message: "Access denied, admin only" });
  }
};

export default adminMiddleware;