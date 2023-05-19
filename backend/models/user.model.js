const ModelUser = function (user) {

    this.tel = user.tel;
    this.mail = user.mail;
    this.name = user.name;
    this.lastName = user.lastName;
    this.nationality = user.nationality;
    this.address = user.address;
    this.privilege = user.privilege;
    this.password = user.password;
    this.dateInscription = user.dateInscription;
};
module.exports = ModelUser;