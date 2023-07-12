class spiel{
    constructor(){
        this.zugNr = 0;
        this.brett;
        this.p1 = new spieler("Weiß", true)
        this.p2 = new spieler("Schwarz", false)
    }
    neuesSpiel(){
        this.brett = new brett()
    }
}

class spieler{
    constructor(name, farbe){
        this.name = name;
        this.farbe = farbe
    }
}

class brett{
    spielfeld = new Map();
    constructor(){
        for (let z = 8; z >= 1; z--){
            if (z == 8){
                for (let i = 0; i < 10; i++){
                    let randFeld = document.createElement("button");
                    randFeld.className = "feld rand";
                    if (!(i == 0 || i == 9))
                        randFeld.innerHTML = String.fromCharCode(64 + i);
                    document.getElementById("spielfeld").appendChild(randFeld);
                }
            }
            for (let s = "A"; s <= "H"; s = String.fromCharCode(s.charCodeAt(0) + 1)){
                if (s == "A"){
                    let randFeld = document.createElement("button");
                    randFeld.className = "feld rand";
                    randFeld.innerHTML = z;
                    document.getElementById("spielfeld").appendChild(randFeld);
                }
                let key = s + z;
                this.spielfeld[key] = new feld(key)
                if (s == "H"){
                    let randFeld = document.createElement("button");
                    randFeld.className = "feld rand";
                    randFeld.innerHTML = z;
                    document.getElementById("spielfeld").appendChild(randFeld);
                }
            }
            if (z == 1){
                for (let i = 0; i < 10; i++){
                    let randFeld = document.createElement("button");
                    randFeld.className = "feld rand";
                    if (!(i == 0 || i == 9))
                        randFeld.innerHTML = String.fromCharCode(64 + i);
                    document.getElementById("spielfeld").appendChild(randFeld);
                }
            }
        }
    }
}

class feld{
    constructor(pos){
        this.pos = pos
        this.feldFarbe = ((pos.charCodeAt(0) + pos.charCodeAt(1)) % 2 == 0) ? "black" : "white";
        this.feldButton = document.createElement("button");
        this.feldButton.className = "feld " + this.feldFarbe;

        switch(pos.charCodeAt(1)){
            case 55: // -> 7
            case 50: // -> 2
                this.figur = new Bauer(pos);
                break;
            case 56: // -> 8
            case 49: // -> 1
                switch(pos.charCodeAt(0)){
                    case 65: // -> A
                    case 72: // -> H
                        this.figur = new Turm(pos);
                        break;
                    case 66: // -> B
                    case 71: // -> G
                        this.figur = new Springer(pos);
                        break;
                    case 67: // -> C
                    case 70: // -> F
                        this.figur = new Laeufer(pos);
                        break;
                    case 68: // -> D
                        this.figur = new Koenig(pos);
                        break;
                    case 69: // -> E
                        this.figur = new Dame(pos);
                }
                break;
            default:
                this.figur = new Leer();
        }
        
        this.feldButton.innerHTML = this.figur.darstellung;
        document.getElementById("spielfeld").appendChild(this.feldButton);
    }
}