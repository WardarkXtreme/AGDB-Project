const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_T);
        req.user = decodedToken;
        const userId = req.user.id;
        const userName = req.user.name;
        const userLastName = req.user.lastName;
        if (req.body.id != userId && req.body.lastName !== userLastName && req.body.name !== userName) {
         throw 'User non Valid !' ;   
        } else {
            next()
        } 
    } catch {
        res.status(401).json({error: new Error("Requête non authentifiée !")}); 
    }
}