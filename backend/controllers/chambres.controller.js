const Chamber = require('../models/chambres.model');

exports.getAllChamber= (req, res, next) => {
  Chamber.find().then(
    (chambres) => {
      const mappedChamber = chambres.map((chamb) => {
        const str = JSON.stringify(chamb.imageUrl);
        let i;
        for (i = 0; i <= 2; i++) {
            chamb.imageUrl[i] = req.protocol + '://' + req.get('host') + '/images/' + chamb.imageUrl[i];
        };
        return chamb;
      });
      res.status(200).json(mappedChamber);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};