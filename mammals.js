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
Raccoon.prototype.steal = function(name, amount) {
    this.milk += amount;
    name.milk -= amount;
    c(`Raccoon stole ${amount} milk from ${name.name}`);
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
