class spiel{
    constructor(){
        this.zugNr = 0;
        this.p1 = new spieler("Weiß", true)
        this.p2 = new spieler("Schwarz", false)
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
        for (let z = 1; z <= 8; z++){
            for (let s = "A"; s <= "H"; s = String.fromCharCode(s.charCodeAt(0) + 1)){
                let key = s + z;
                this.spielfeld[key] = new feld(key)
            }
        }
    }
}

class feld{
    constructor(pos){
        this.feldFarbe = ((pos.charCodeAt(0) + pos.charCodeAt(1)) % 2 == 0) ? "black" : "white";
        const htmlFeld = document.createElement("button");
        htmlFeld.innerHTML = (this.feldFarbe == "black") ? "♖" : "♜";
        htmlFeld.className = "feld " + this.feldFarbe;
        document.getElementById("spielfeld").appendChild(htmlFeld)
    }
}