const nome = "DevJunior"

let xpHero = 2000

let levelHero;



if (xpHero <= 1000) {

  levelHero = "Ferro"

} else if (xpHero > 1000 && xpHero <= 2000) {

  levelHero = "Bronze"

} else if (xpHero > 2000 && xpHero <= 5000) {

  levelHero = "Prata"

} else if (xpHero > 5000 && xpHero <= 7000) {

  levelHero = "Ouro"

} else if (xpHero > 5000 && xpHero <= 8000) {

  levelHero = "Platina"

} else if (xpHero > 8000 && xpHero <= 9000) {

  levelHero = "Ascendente"

} else if (xpHero > 9000 && xpHero <= 10000) {

  levelHero = "Imortal"

} else {

  levelHero = "Radiante"

}



console.log("O heroi de nome " + nome + " está no nível " + levelHero)