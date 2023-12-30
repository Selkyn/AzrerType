let listeMots = ["Cachalot", "Pétunia", "Serviette"];
let listePhrases = ["Pas de panique", "La vie, l'univers et le reste", "Merci pour le poisson"];
    

function afficherResultat(score, nbMotsProposes) {
    console.log("votre score est de " + score + " sur " + nbMotsProposes)
}

function choisirPhrasesOuMots() {
    let choix = prompt("choisir la liste : mots ou phrases");
    while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("choisir la liste : mots ou phrases");
    }
    return choix;
}

function lancerBoucleDeJeu(listePropositions) {
    let score = 0
    for (let i = 0; i < listePropositions.length; i ++) {
        let motUtilisateur = prompt ("rentrer le mot " + listePropositions[i]);
        if (motUtilisateur === listePropositions[i]) {
            score++
        }
    }
    return score
}

function lancerJeu() {
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    if (choix === "mots") {
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    }else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }
    
    
    afficherResultat(score, nbMotsProposes)
}


lancerJeu()

































// console.log("hello world")

// let score = 0;
// let monMot = prompt("tape le mot");
// const motADeviner = "caca";

// if (monMot === motADeviner) {
//     score ++
// }
// console.log(score);
// let numberOfValues = prompt("Combien de nombres souhaitez-vous entrer ?");
// let sum = 0;

// for (let i = 0; i < numberOfValues; i++) {
//     let inputValue = prompt("Entrez le nombre " + (i + 1));
//     // Convertir la chaîne en nombre entier
//     inputValue = parseInt(inputValue);
    
//     // Ajouter la valeur à la somme
//     sum += inputValue;
// }

// // Calculer la moyenne
// let average = sum / numberOfValues;

// // Afficher le résultat
// console.log("La moyenne des nombres entrés est : " + average);