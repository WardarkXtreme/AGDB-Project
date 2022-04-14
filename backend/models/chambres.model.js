const chambres = [
    {
        "id": "0",
        "title": "Chambre PMR",
        "headtext": ["Accessible aux personnes à mobilités réduites !", "Optimisé pour garantir accessibilité, autonomie maximale, confort et sécurité !"],
        "imageUrl": {
            0: "pmr1.jpg",
            1: "pmr2.jpg",
            2: "pmr3.jpg"
        },
        "subtitle": "Située au rez-de-chaussée",
        "li": ["Un lit double", "Salle de bain avec douche, et toilettes", "Équipements en chambre : chauffage indépendant, penderie, bureau"]
    },
    {
        "id": "1",
        "title": "Suite Parentale",
        "headtext": [""],
        "imageUrl": {
            0: "suiteparentale1.jpg",
            1: "suiteparentale2.jpg",
            2: "suiteparentale3.jpg"
        },
        "subtitle": "Située au premier étage",
        "li": ["Un lit double", "Salle de bain avec douche, baignoire, toilettes", "Équipements en suite : chauffage indépendant, penderie"]
    },
    {
        "id": "2",
        "title": "Chambre Rose Poudrée",
        "headtext": [""],
        "imageUrl": {
            0: "chambrerose1.jpg",
            1: "chambrerose2.jpg",
            2: "chambrerose3.jpg"
        },
        "subtitle": "Située au premier étage",
        "li": ["Un lit double", "Équipements en suite : chauffage indépendant, penderie", "Commun à l’étage : accès salle de bain avec douche, toilettes et Sauna 4 personnes"]
    },
    {
        "id": "3",
        "title": "Chambre Moka",
        "headtext": [""],
        "imageUrl": {
            0: "chambremoka1.jpg",
            1: "chambremoka2.jpg",
            2: "chambremoka3.jpg"
        },
        "subtitle": "Située au premier étage",
        "li": ["Un lit double", "Équipements en suite : chauffage indépendant, penderie", "Commun à l’étage : accès salle de bain avec douche, toilettes et Sauna 4 personnes"]
    },
    {
        "id": "4",
        "title": "Dortoir",
        "headtext": [""],
        "imageUrl": {
            0: "dortoir1.jpg",
            1: "dortoir2.jpg",
            2: "dortoir3.jpg"
        },
        "subtitle": "Située au deuxième étage",
        "li": ["Quatre lits individuels", "Un canapé convertible (2 places)", "Équipements : chauffage indépendant, penderie, toilettes"]
    }
];

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(chambres))));
}
  