//***model utilisateur
const ModelUser = function (user) {
   
    this.tel = user.tel;
    this.mail = user.mail;
    this.name = user.name;
    this.lastName = user.lastName;
    this.nationality = user.nationality;
    this.address = user.address;
    this.city = user.city;
    this.state = user.state;
    this.country = user.country;
    this.postalCode = user.postalCode;
    this.privilege = user.privilege;
    this.password = user.password;
    this.init = user.init;
};
module.exports = ModelUser;