const Gite = require('../models/gite.model');

exports.getDataGite= (req, res, next) => {
  Gite.find().then(
    (git) => {
      const mappedGite = git.map((gite) => {
        const str = JSON.stringify(gite.imageUrl);
        let i;
        for (i = 0; i <= 2; i++) {
            gite.imageUrl[i] = req.protocol + '://' + req.get('host') + '/images/' + gite.imageUrl[i];
        };
        return gite;
      });
      res.status(200).json(mappedGite);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};