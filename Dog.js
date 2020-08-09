var chalk = require("chalk");

function Dog() {
    this.name = "Phương Quyên";
    this.stomach = [];
}
Dog.prototype.eat = function(cat) {
    this.stomach.push(cat);
}
Dog.prototype.talk = function() {
    console.log("My name is" + chalk.blue(this.name));
}

module.exports = Dog;