class Figur{
        constructor(){
            let figurFarbe;
            let darstellung;
        }
        erlaubteFelderBerechnen(){
            return [];
        }

}

class Bauer extends Figur{
        constructor(pos){
            super();
            this.darstellung = (pos.charCodeAt(1) % 2 == 0) ? "♙" : "♟︎";
            this.figurFarbe = (pos.charCodeAt(1) % 2 == 0) ? "weiß" : "schwarz";
        }
        erlaubteFelderBerechnen(pos) {
            let erlaubteFelder = [];
            // Check ob 1 Feld weitergehen möglich ist
            if (onField(pos,0,(this.figurFarbe == "weiß") ? 1 : -1) && isEmpty(pos,0,(this.figurFarbe == "weiß") ? 1 : -1)){
                erlaubteFelder.push(String.fromCharCode(pos.charCodeAt(0)) + String.fromCharCode(pos.charCodeAt(1) + ((this.figurFarbe == "weiß") ? 1 : -1)));
                // Check ob 2 Felder weitergehen möglich ist
                if (onField(pos,0,(this.figurFarbe == "weiß") ? 2 : -2) && (String.fromCharCode(pos.charCodeAt(1)) == 2 || (String.fromCharCode(pos.charCodeAt(1)) == 7)) && isEmpty(pos,0,(this.figurFarbe == "weiß") ? 2 : -2))
                    erlaubteFelder.push(String.fromCharCode(pos.charCodeAt(0)) + String.fromCharCode(pos.charCodeAt(1) + ((this.figurFarbe == "weiß") ? 2 : -2)));
            }  
            // Check ob rechts ein gültiges Feld zum schmeißen ist
            if (onField(pos,1,(this.figurFarbe == "weiß") ? 1 : -1) && isEnemy(pos,1,(this.figurFarbe == "weiß") ? 1 : -1)){
                erlaubteFelder.push(String.fromCharCode(pos.charCodeAt(0) + 1) + String.fromCharCode(pos.charCodeAt(1) + ((this.figurFarbe == "weiß") ? 1 : -1)));
            }
            // Check ob links ein gültiges Feld zum schmeißen ist
            if (onField(pos,-1,(this.figurFarbe == "weiß") ? 1 : -1) && isEnemy(pos,-1,(this.figurFarbe == "weiß") ? 1 : -1)){
                erlaubteFelder.push(String.fromCharCode(pos.charCodeAt(0) - 1) + String.fromCharCode(pos.charCodeAt(1) + ((this.figurFarbe == "weiß") ? 1 : -1)));
            }
            return erlaubteFelder;
        }
}

class Springer extends Figur{
    constructor(pos){
        super();
            this.darstellung = (pos.charCodeAt(1) % 2 != 0) ? "♘" : "♞";
            this.figurFarbe = (pos.charCodeAt(1) % 2 != 0) ? "weiß" : "schwarz";
    }
}

class Laeufer extends Figur{
    constructor(pos){
        super();
            this.darstellung = (pos.charCodeAt(1) % 2 != 0) ? "♗" : "♝";
            this.figurFarbe = (pos.charCodeAt(1) % 2 != 0) ? "weiß" : "schwarz";
    }
}

class Turm extends Figur{
    constructor(pos){
        super();
            this.darstellung = (pos.charCodeAt(1) % 2 != 0) ? "♖" : "♜";
            this.figurFarbe = (pos.charCodeAt(1) % 2 != 0) ? "weiß" : "schwarz";
    }
}

class Dame extends Figur{
    constructor(pos){
        super();
            this.darstellung = (pos.charCodeAt(1) % 2 != 0) ? "♕" : "♛";
            this.figurFarbe = (pos.charCodeAt(1) % 2 != 0) ? "weiß" : "schwarz";
    }
}

class Koenig extends Figur{
    constructor(pos){
        super();
            this.darstellung = (pos.charCodeAt(1) % 2 != 0) ? "♔" : "♚";
            this.figurFarbe = (pos.charCodeAt(1) % 2 != 0) ? "weiß" : "schwarz";
    }
}

class Leer extends Figur{
    constructor(pos){
        super();
            this.darstellung = "";
    }
}

// Prüft ob die Coordinaten pos[0] + mod1, pos[1] + mod2 auf dem Spielfeld sind
function onField(pos, mod1, mod2){
    let result = true;
    if(pos.charCodeAt(0) + mod1 > 72 || pos.charCodeAt(0) + mod1 < 65) 
        result = false;

    if(pos.charCodeAt(1) + mod2 > 56 || pos.charCodeAt(1) + mod2 < 49) 
        result = false;

    return result;
}

// Prüft ob auf den Coordinaten pos[0] + mod1, pos[1] + mod2 eine "Leer" Figur steht
function isEmpty(pos, mod1, mod2){
    if (game.brett.spielfeld[String.fromCharCode(pos.charCodeAt(0) + mod1) + String.fromCharCode(pos.charCodeAt(1) + mod2)].figur instanceof Leer)
        return true
    return false

}

// Prüft ob auf den Coordinaten pos[0] + mod1, pos[1] + mod2 eine Figur mit gegnerischer Farbe steht.
function isEnemy(pos, mod1, mod2){

    if (isEmpty(pos,mod1,mod2) || game.brett.spielfeld[pos].figur.figurFarbe === game.brett.spielfeld[String.fromCharCode(pos.charCodeAt(0) + mod1) + String.fromCharCode(pos.charCodeAt(1) + mod2)].figur.figurFarbe )
        return false;
    return true;
}