const User = function (user) {
    this.id = user.id;
    this.name = user.name;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = user.password;
};

module.exports = User;