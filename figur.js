class Figur{
        constructor(){
            let figurFarbe;
            let darstellung;
        }
        erlaubteFelderBerechnen(){
            return ["00"];
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
            if (game.brett.spielfeld[String.fromCharCode(pos.charCodeAt(0)) + String.fromCharCode(pos.charCodeAt(1) + ((this.figurFarbe == "weiß") ? 1 : -1))].figur instanceof Leer){
                erlaubteFelder.push(String.fromCharCode(pos.charCodeAt(0)) + String.fromCharCode(pos.charCodeAt(1) + ((this.figurFarbe == "weiß") ? 1 : -1)));
                if ((String.fromCharCode(pos.charCodeAt(1)) == 2 || String.fromCharCode(pos.charCodeAt(1) == 7)) && game.brett.spielfeld[String.fromCharCode(pos.charCodeAt(0)) + String.fromCharCode(pos.charCodeAt(1) + ((this.figurFarbe == "weiß") ? 2 : -2))].figur instanceof Leer)
                erlaubteFelder.push(String.fromCharCode(pos.charCodeAt(0)) + String.fromCharCode(pos.charCodeAt(1) + ((this.figurFarbe == "weiß") ? 2 : -2)));
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