const x = 10;
console.log(x);
let y = 20;
console.log(y);
y = 41;
console.log(y);
let z = y % 4;
console.log(z);
y++;
console.log(y);
z--;
console.log(z);
console.log("la valeur de y:" + y);
let chaine = 'chaine" mot en quote" reste de la chaine';
console.log(chaine);
chaine = "its gode day";
console.log(chaine);
dossier = "dossier\\mes imagesimag.png";
console.log(chaine);
caine = ' premaire ligne"dousieme ligne';
console.log(chaine);
var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.id);
console.log(person.fullName());
function affichierMessage() {
  console.log("un message");
}
affichierMessage();
function sum(a, b) {
  console.log(a + b);
}
sum(2, 3);
sum(6, 12);

function sumRuturn(a, b) {
  return a + b;
}
let s;
s = sumRuturn(7, 5);
console.log(s);

s = sumRuturn(4, 11);
console.log(s);
let val1 = Math.random() * 10;
console.log(val1);
let val2 = Math.random() * 10;
console.log(val2);
s = sumRuturn(val1, val2);
console.log(s);
s = sumRuturn(2, 6);
z = Math.floor(Math.random() * 10);
console.log("valuer de z:" + z);

function egalite(k, b) {
  return k == b;
}
let p;
p = egalite(2, 2);
console.log(p);

function egalite(d, u) {
  return d == u;
}
let n;
n = egalite(5, 3);
console.log(n);

function getGrand(g, h) {
  return g > h;
}
let t;
t = getGrand(5, 3);
console.log(t);

let hour = 10;
let greeting = "";

function hourloge(hour) {
  let greeting = "";

  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  return greeting;
}
let resultat = hourloge(10);

console.log(resultat);

function getAge(age) {
  let agehumain = "";
  if (age <= 10) {
    agehumain = "enfant";
  } else if (age <= 15) {
    agehumain = "adelesent";
  } else if (age <= 20) {
    agehumain = "jeune";
  } else if (age <= 45) {
    agehumain = "adulte";
  } else if (age <= 100) {
    agehumain = "senior";
  } else {
    agehumain = "trop vieux";
  }
  return agehumain;
}
let resultatss = getAge(15);
console.log(resultatss);

function numeroAge(monage) {
  let message = "";
  switch (true) {
    case monage <= 10:
      message = "enfant";
      break;
    case monage <= 15:
      message = "adelesent";
      break;
    case monage <= 20:
      message = "jeune";
      break;
    case monage <= 45:
      message = "adult";
      break;
    case monage <= 100:
      message = "seniore";
      break;
    default:
      message = "trop vieux";
  }
  return message;
}
console.log(numeroAge(101));
console.log(numeroAge(50));
console.log(numeroAge(24));

function entier(tab) {
  let message = "";
  let i;
  for (i = 0; i < tab.length; i++) {
    message += tab[i] + "\n";
  }
  return message;
}
let tab1 = [1, 2, 3, 4, 5];
console.log(entier(tab1));

function getMot(tab) {
  let message = "";
  let i;
  for (i = 0; i < tab.length; i++) {
    if (tab[i] === "non") {
      continue;
    }
    message += tab[i] + "\n";
  }
  return message;
}
let tab3 = ["marck", "moh", "non", "joe", "jamal", "souad"];
console.log(getMot(tab3));

function getMots(tab) {
  let message = "";
  let i;
  for (i = 0; i < tab.length; i++) {
    if (tab[i] === "non") {
      break;
    }
    message += tab[i] + "\n";
  }
  return message;
}
let tab4 = ["marck", "moh", "joe", "non", "jamal", "souad", "flourance"];
console.log(getMots(tab4));

function preNom(map) {
  let message = "";
  let i = 0;
  while (map[i]) {
    if (map[i] === "non") {
      i++;
      continue;
    }
    message += map[i] + "\n";
    i++;
  }
  return message;
}
let map = ["zada", "moh", "non", "joe", "jamal", "souad", "flourance"];
console.log(preNom(map));






function avecNon(map) {
  let message = "";
  let i = 0;
  while ( i< map.length) {
    message += map[i] + "\n";
    i++;
  }
  return message;
}
let map1 = ["zada", "moh", "non", "joe", "jamal", "souad", "flourance"];
console.log(avecNon(map1));



 var car =  [ "moh", "non", "joe", "jamal", "souad", "flourance"];
console.log(car [4]);
car.sort();
console.log(car);
car.lastIndexOf()



