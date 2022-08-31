module.exports = (req, res, next) => {
    const regExLastName = /^(([a-zA-Z-]{3,10}))$/;
    const regExFirstName = /^(([a-zA-Z-]{3,10}))$/;
    const regExMail = /^(([a-zA-Z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}))$/;
    const regExMessage = /^(([a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-']{40,150}))$/;
    try {
        const validLastName = req.body.lastName.match(regExLastName);
        const validFirstName = req.body.firstName.match(regExFirstName);
        const validMail = req.body.email.match(regExMail);
        const validMessage = req.body.message.match(regExMessage);
        if (!validLastName || !validFirstName || !validMail || !validMessage ) {
            return res.status(401).json({message :'requête annulée'});
        };
        next()
    }
    catch (err) {
        res.status(500).json({err})
    }
}