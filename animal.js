function Animal(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
};
Animal.prototype.run = () => c('Running');
Animal.prototype.jump = () => c('Jumping');