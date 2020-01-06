let text = document.getElementById("text");
let combat = document.getElementById("combat");
let buttonBox = document.getElementById('buttonBox');
let input = document.getElementById('input');
let player;
class Personnage {
        constructor(vie,force){
            this.vie=vie;
            this.force=force;
            this.xp=0;
        }
}
/*    attaquer(cible){
            if(this.vie > 0) {
                const degats= this.force;
                console.log(
                    `${this.nom} attaque ${
                        cible.nom
                    }et lui inflige ${degats} points de dégats`
                    );
                    cible.vie -= degats;
                    if(cible.vie >0){
                        console.log( `${this.nom} a encore ${cible.vie} points de vie`);       
                    }else{
                        cible.vie=0;
                        const bonusXP=10;
                        console.log(
                            `${this.nom} a tué ${
                                cible.nom
                            }et gagne ${bonusXP} points d'exprerience`
                        );
                        this.xp += bonusXP;
                    }
            }else{
                console.log(
                    `${this.nom}n'a plus de points de vie et ne peux pas attaquer`
                );
        

}
    }
    description(){
            console.log(
                `${this.nom}a ${this.vie} points de vie, ${this.force
            } en force et ${this.xp} points d'experience`
            );
        }
}

    // DEPART DU  PERSONNAGE
    player={
        force:10,
        xp:0,
        vie:100,
    // renovie une description du personnage
    Description(){
        return`${this.nom} a ${this.vie} points de vie, ${this.force
        } en froce et ${this.xp} points d'experience`;
    }
    };
    monstre.attaquer(Marius);
    Marius.attaquer(monstre);
  */ 
 let advanceTo = function (s) {
    changeText(s.text)
    changeButtons(s.buttons)
};
input.onkeypress = function (event) { //This is the input on the splash screen for the video game 
    if (event.key == "Enter" || event.keyCode == 13) {
        player = input.value;
        input.parentNode.removeChild(input);
        advanceTo(scenario.two);
    }
};
let changeText = function (words) { //This changes a certain phrase into the character name that the user has entered
    text.innerHTML = words.replace("NAME", player);
};
let changeButtons = function (buttonList) {
    buttonBox.innerHTML = "";
    for (let i = 0; i < buttonList.length; i++) {
        buttonBox.innerHTML += "<button onClick=" + buttonList[i][1] + ">" + buttonList[i][0] + "</button>";
    }
};

let scenario = {};
 scenario = {
    one: {
        text: "Salut et bienvenue dans cette nouvelle aventure ! Choisit ton prénom s'il te plaît !",
    },
    two: {
        text: "NAME, était une personne très timide est pas sur d'elle. Un jour on lui proposa de sauver le monde... NAME, commenca avec 0xp/100 de points de vie/10 de force et 0 d'OR",
        buttons: [["ACCEPETER", "advanceTo(scenario.three)"], ["REFUSER", "advanceTo(scenario.four)"]]
    },
    three: {
        text: "Il se mit donc en route pour cette nouvelle quête... Mais il tombit nez à nez avec l'un des Monstre de cette forêt sombre.",
        buttons: [["ATTAQUER SANS ARMES", "advanceTo(scenario.five)"], ["ATTAQUER AVEC UN BATON", "advanceTo(scenario.six)"]]
    },
    four: {
        text: "AH ! tu veux pas jouer en fait ? ou t'aime pas ton surnom ? ",
        buttons: [["RECOMMENCER", "window.location.reload()"]]
    },
    five: {
        text: "NAME, attaque avec ces points, se blaisse pendant le combat mais réussit quand même à vaincre la bestiole NAME,5 XP/ 80 VIE/ 5 OR",
        buttons: [["NEXT", "advanceTo(scenario.twentyseven)"]]
    },
    six: {
        text: "Il rammassa le baton qui se trouvait à ces pieds et l'attaqua avec ! Il réussit à l'abattre après 10 coups de baton, NAME, a maintenant 10 XP/90 VIE/10 OR",
        buttons: [["NEXT", "advanceTo(scenario.seven)"]]
    },
    seven: {
        text: "Sur son chemin il croisa Renet chef des fabriquant d'armes, il lui proposa alors de lui acheter une arme",
        buttons: [["ACHETER ARC (10 OR)", "advanceTo(scenario.eight)"], ["ACHETER COUTEAU (5 OR)", "advanceTo(scenario.nine)"], ["RIEN ACHETER", "advanceTo(scenario.ten)"]]
    },
    eight: {
        text: "Au bout du chemin en pierre NAME, fit attaquer par un lion  NAME, n'a plus d'OR",
        buttons: [["ATTAQUER AVES les points", "advanceTo(scenario.eleven)"], ["ATTAQUER AVEC L'ARC", "advanceTo(scenario.twelve)"], ["S'ENFUIR", "advanceTo(scenario.thirteen)"]]
    },
    nine: {
        text: "Au bout du chemin en pierre 'NAME', fit attaquer par un lion NAME, n'a plus que 5 d'OR",
        buttons: [["ATTAQUER AVES LES POINTS", "advanceTo(scenario.twentynine)"], ["ATTAQUER AVES LE COUTEAU", "advanceTo(scenario.twentyeight)"], ["S'ENFUIR", "advanceTo(scenario.thirteen)"]]
    },
    ten: {
        text: "Il n'acheta rien car il pensait pouvoir tenir avec son baton NAME, a donc 10 d'OR",
        buttons: [["NEXT", "advanceTo(scenario.thirty)"]]
    },
    eleven: {
        text: "NAME, attaqua donc avec ces points pour se défendre, il l'assoma puis prit un bout de bois pour le finir.",
        buttons: [["NEXT", "advanceTo(scenario.seven)"]]
    },
    twelve: {
        text: "NAME, assez loin du lion commenca à lui lancer ces flèches, dès qu'il arriva un peu fatiguer devant, il lui envoya le coup de grâce, il tomba  NAME, 30 XP/ 75 VIE/ 20 OR",
        buttons: [["NEXT", "advanceTo(scenario.fourteen)"]]
    },
    thirteen: {
        text: "Mais arrete de vouloir courir, TU NE PEUX PAS T'ENFUIR",
        buttons: [["NOUVELLE PARTIE", "window.location.reload()"], ["RECOMMENCER", "advanceTo(scenario.two)"]]
    },
    fourteen: {
        text: "NAME, commenca à avoir faim et soif",
        buttons: [["MANGER LE LION", "advanceTo(scenario.fifteen)"], ["ALLER PRES D'UNE RIVIERE", "advanceTo(scenario.sixteen)"], ["CONTINUER SA ROUTE", "advanceTo(scenario.thirty)"]]
    },
    fifteen: {
        text: "Après avoir fait cuir le lion et mangeait, il finissa par s'endormir autour du feu NAME, 40 XP/ 100 VIE/ 5 FORCE",
        buttons: [["NEXT", "advanceTo(scenario.eighteen)"]]
    },
    sixteen: {
        text: "Il finissa par trouver une rivière et alla boire et nettoyer ces blessures",
        buttons: [["NEXT", "wiadvanceTo(scenario.twelve)"]]
    },
    eighteen: {
        text: "Le lendemain 'NAME' se réveilla plus en forme que jamais, puisqu'il était bientot arriver à son but... Il s'arreta net devant le boss des monstres",
        buttons: [["TIRER LES FLECHES", "advanceTo(scenario.nineteen)"], ["TIRER LES CAILLOUX", "advanceTo(scenario.twenty)"], ["ATTENDRE QU'IL SOIT PRES", " advanceTo(scenario.twentytwo"]]
    },
    twentytwo: {
        text: "Il prena la decision d'attendre le dernier moment pour économiser ces flèches, le monste arriva à toute allure il visa son coeur et lacha sa flèche! BIM, en pleins dans le mille! NAME, 75 XP/ 85 VIE/ 20 FORCE/ 50 OR",
        buttons: [["NEXT", "advanceTo(scenario.twentythree)"]]
    },
    twentythree: {
        text: "Il arriva au bout de sa quête en finissant intact et pour le remercier lui proposi d'acheter",
        buttons: [["UME MAISON (50 OR)", "advanceTo(scenario.twentyfour)"], ["DE LA NOURRITURE (20 OR)", "advanceTo(scenario.twentyfive)"], ["UNE MONTURE (40 OR)", "advanceTo(scenario.twentysix)"]]
    },
    twentyfour: {
        text: "Il choisit donc la maison ! BRAVO VOUS AEVEZ GAGNE NAME, fini avec 75 XP/ 85 VIE/ 20 FORCE/ 0 OR ",
        buttons: [["RECOMMENCER", "window.location.reload()"]]
    },
    twentyfive: {
        text: "Il choisit donc la nourriture ! BRAVO VOUS AEVEZ GAGNE NAME, fini avec 75 XP/ 85 VIE/ 20 FORCE/ 30 OR ",
        buttons: [["RECOMMENCER", "window.location.reload()"]]
    },
    twentysix: {
        text: "Il choisit donc la monture ! BRAVO VOUS AEVEZ GAGNE NAME, fini avec 75 XP/ 85 VIE/ 20 FORCE/ 10 OR ",
        buttons: [["RECOMMENCER", "window.location.reload()"]]
    },
    twentyseven: {
        text: "Sur son chemin il croisa Renet chef des fabriquant d'armes, il lui proposa alors de lui acheter une arme",
        buttons: [["ACHETER COUTEAU (5 OR)", "advanceTo(scenario.nine)"], ["RIEN ACHETER", "advanceTo(scenario.ten)"]]
    },
    twentyeight: {
        text: "Il poignarda le lion",
        buttons: [["NEXT", "advanceTo(scenario.fourteen)"]]
    },
    twentynine: {
        text: "NAME, prena ses points pour tuer ce lion dangereux, il se blessa énormement",
        buttons: [["NEXT", "advanceTo(scenario.fourteen)"]]
    },
    thirty: {
        text: "Au bout du chemin en pierre NAME, fit attaquer par un lion",
        buttons: [["ATTAQUER", "advanceTo(scenario.thirtyone)"], ["FUIR", "advanceTo(scenario.thirtytwo)"]]
    },
    thirtyone: {
        text: "Après une longue heure NAME, réussit à en finir avec ce lion même si il à été beaucoup touché",
        buttons: [["NEXT", "advanceTo(scenario.thritythree)"]]
    },
    thirtytwo: {
        text: "Tu crois que tu cours plus vite que lui ? ECHEC",
        buttons: [["NOUVELLE PARTIE", "window.location.reload()"], ["RECOMMENCER", "advanceTo(scenario.two)"]]
    },
    thritythree: {
        text: "Ce n'est pas fini ! Après cette rafraichit le Boss des monstres se ramena ",
        buttons: [["LANCER DES CAILLOUX", "advanceTo(scenario.thrityfour)"]]
    },
    thrityfour: {
        text: "NAME, n'a plus de points de vitalité. NAME meurt. DOMMAGE",
        buttons: [["NOUVELLE PARTIE", "window.location.reload()"], ["RECOMMENCER", "advanceTo(scenario.two)"]]
    },
};

advanceTo(scenario.one)