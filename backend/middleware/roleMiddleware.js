export const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Not authorized" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized" });
    }
  };
  
  export const isSuperadmin = (req, res, next) => {
    if (req.user.role !== "superadmin") {
      return res.status(403).json({ message: "Access denied. Superadmin role required." });
    }
    next();
  };
  
  export const isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin role required." });
    }
    next();
  };

  export const isFaculty = (req, res, next) => {
    if (req.user.role !== "faculty") {
      return res.status(403).json({ message: "Access denied. Faculty role required." });
    }
    next();
  };

  export const isStudent = (req, res, next) => {
    if (req.user.role !== "student") {
      return res.status(403).json({ message: "Access denied. Student role required." });
    }
    next();
  };