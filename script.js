const c = (...n) => n.forEach((i) => console.log(i));


const raccoon = new Raccoon('Valera', 35, 'female');
const cow = new Cow('Milka', 5, 'female');
const horse = new Horse('Ivan', 15, 'male')

raccoon.giveMilk();
cow.giveMilk();
raccoon.steal(cow, 3);


c(raccoon, cow, horse);