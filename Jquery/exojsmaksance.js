


function impot(revenu) {
    switch (true) {
      case revenu <= 1000:
        return revenu * 0.05;
      case revenu <= 2000:
        return revenu * 0.07;
      case revenu <= 3000:
        return revenu * 0.11;
      default:
        return revenu * 0.15;
    }
  }
  console.log(impot(1000));

  function secu(revenu) {
    switch (true) {
      case revenu <= 1000:
        return revenu * 0.03;
      case revenu <= 2000:
        return revenu * 0.06;
      case revenu <= 3000:
        return revenu * 0.08;
      default:
        return revenu * 0.12;
    }
  }
  console.log(secu(1000));

  function age(age) {
    switch (true) {
      case age <= 10:
        return "enfant";
      case age <= 18:
        return "adolescent";
      case age <= 45:
        return "jeune";
      default:
        return "vieux";
    }
  }
  console.log(age(15));

  function administration(tab) {
    let i;
    let info = "";
    for (i = 0; i < tab.length; i++) {
      nom = tab[i].nom;
      prenom = tab[i].prenom;
      revenu = impot(tab[i].revenu);
      securite = secu(tab[i].revenu);
      age1 = age(tab[i].age);
      info +=  nom +  "--" +   prenom +  "--" +   age1 +    "--" +  revenu + "--" +  securite + "\n";
    }
    return info;
  }
  tab12 = [
    { nom: "mok", prenom: "zak", age: 23, revenu: 1500 },
    { nom: "dab", prenom: "frank", age: 47, revenu: 4500 },
  ];

  console.log(administration(tab12));