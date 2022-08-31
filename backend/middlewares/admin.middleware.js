const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_T);
        req.user = decodedToken;
        const userRole = req.user.role;
        const userId = req.user.id;
        if (req.body.id != userId && userRole !== 1) {
         throw 'Admin non Valide !' ;   
        } else {
            next()
        } 
    } catch {
        res.status(401).json({error: new Error("Requête non authentifiée !")}); 
    }
}