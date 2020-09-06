const c = (...n) => n.forEach((i) => console.log(i));


function Animal(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
};
Animal.prototype.run = () => c('Running');
Animal.prototype.jump = () => c('Jumping');

function Mammals(...arg) {
    this.milk = 10;
    Animal.apply(this, arg);
};
Mammals.prototype = Object.create(Animal.prototype);
Mammals.prototype.constructor = Mammals;
Mammals.prototype.giveMilk = function() {
    if (this.gender === 'female') this.milk++;
};

function Raccoon(...arg) {
    Mammals.apply(this, arg);
};

Raccoon.prototype = Object.create(Mammals.prototype);
Raccoon.prototype.constructor = Raccoon;
Raccoon.prototype.steal = function() {
    c('Steal something');
};

function Cow(...arg) {
    Mammals.apply(this, arg);
};
Cow.prototype = Object.create(Mammals.prototype);
Cow.prototype.constructor = Cow;

function Horse(...arg) {
    Mammals.apply(this, arg);
};
Horse.prototype = Object.create(Mammals.prototype);
Horse.prototype.constructor = Horse;

const raccoon = new Raccoon('Valera', 35, 'female');
const cow = new Cow('Milka', 5, 'female');
const horse = new Horse('Ivan', 15, 'male')

raccoon.giveMilk();
cow.giveMilk();
raccoon.steal();

c(raccoon, cow, horse);