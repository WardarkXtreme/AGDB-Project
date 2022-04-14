const gite = [
    {
        "id": "0",
        "title": "Pour des vacances innoubliables !",
        "headtext": ["Un cocon de charme à Avranches, sur la côte normande, situé à seulement 30 minutes du Mont-Saint-Michel !"],
        "imageUrl": {
            0: "gite1.jpg",
            1: "gite2.jpg",
            2: "gite3.jpg"
        },
        "subtitle1": "Le Gîte :",
        "li1": ["Un grand séjour, une cuisine, une salle à manger et un salon cosy de 63 m2", "Quatre chambres (dont une suite parentale et une chambres PMR)", "Un dortoir (capacité de six personnes)"],
        "subtitle2": "Le jardin aménagé :",
        "li2": ["Vous retrouverez pour vos loisirs plusieurs équipements de plein air(terrain de pétanque, jeu de molki, tennis de table, badminton et hamac)", "Ces équipements sont à votre disposition pour votre séjour"]
    }
];

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(gite))));
}