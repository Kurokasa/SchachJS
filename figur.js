class Figur{
        constructor(){
            let figurFarbe;
            let darstellung;
            const erlaubteFelder = [];
        }

}

class Bauer extends Figur{
        constructor(pos){
            super();
            this.darstellung = (pos.charCodeAt(1) % 2 == 0) ? "♙" : "♟︎";
            this.figurFarbe = (pos.charCodeAt(1) % 2 == 0) ? "weiß" : "schwarz";
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