class Luchador {
    constructor(nombre, id, fuerza, defensa, suerte, velocidad) {
        this.Vida = 100;
        this.Id = id;
        this.Nombre = nombre;
        this.Fuerza = fuerza;
        this.Defensa = defensa;
        this.Suerte = suerte;
        this.Velocidad = velocidad;
    }
    ataque(enemigo) {
        let potra = funciones.random(1, enemigo.Suerte); //potra defensa
        let gafe = funciones.random(1, 5); //gafe de ataque
        let golpe = (this.Fuerza - gafe) - (enemigo.Defensa + potra);
        let cardio = funciones.random(1, 100); //gafe de velocidad

        if (cardio < enemigo.Velocidad) {
            golpe -= funciones.random(1, 5);
        }
        enemigo.Vida -= golpe;
    }
}

//Declaramos a los 8 jugadores
let l1 = new Luchador('Nieves', '1', 25, 5, 3, 10);
let l2 = new Luchador('Escorpio', '2', 28, 4, 6, 12);
let l3 = new Luchador('Bionica', '3', 23, 7, 5, 8);
let l4 = new Luchador('Minataura', '4', 26, 6, 8, 9);
let l5 = new Luchador('Ash', '5', 28, 5, 2, 7);
let l6 = new Luchador('Verne', '6', 30, 4, 6, 12);
let l7 = new Luchador('Vodoo', '7', 20, 5, 10, 10);
let l8 = new Luchador('Eminem', '8', 29, 3, 3, 6);

//Traducimos
let jugadores = {
    "1": l1,
    "2": l2,
    "3": l3,
    "4": l4,
    "5": l5,
    "6": l6,
    "7": l7,
    "8": l8,
}

//Juego
let juego = {
    turno: 0,
    ganador: "",
    victoriaj2: "",
    victoriaj1: "",
    iniciativa: "",
    j1: "",
    j2: "",

    resetFight() {
        this.turno = 0;
        this.iniciativa = "";
        this.j1 = "";
        this.j2 = "";
    },
    clearFight() {
        this.resetFight();

        partida.cont_lucha++;
        this.j1.Vida = 100;
        this.j2.Vida = 100;

        partida.entrada5();
    },
    mainFight(argumentoLuchador1, argumentoLuchador2) {

        iniciativa = funciones.random(1, 3);

        this.turno++;
        this.j1 = argumentoLuchador1;
        this.j2 = argumentoLuchador2;

        //Luchador1 estado y acciones
        if (this.j1.Vida > 0) {
            if (iniciativa == 1) {
                this.victoriaj1 = (this.j2.Vida <= 0) ? "v" : "m";
                if (this.victoriaj1 == "v") {
                    //Gana el Jugador 1
                } else {
                    this.j1.ataque(this.j2);

                    if (this.j2.Vida < 0) {
                        this.j2.Vida = 0;
                    }

                    let reloj = document.getElementById("arena2"); //No se que es lbact(reloj) ni glad2v(arena2)
                    reloj.innerHTML = `VIDA JUGADOR 2 : ${this.j2.Vida}`;
                }
            }
        } else { //Gana el jugador 2

            document.getElementById("tierra").onclick = ""; //No se que es fist (tierra)
            this.ganador = `${this.j2.Nombre} GANA ${this.j1.Nombre} PIERDE`;

            let perdedor = document.getElementById("muestraKO");
            perdedor.innerHTML = `${this.j2.Nombre} GANA... ${this.j1.Nombre} PIERDE`;

            partida.equipo2ganador++;

            resolveIn(1000).then(delay => {
                this.clearFight();
            });
        }

        //Luchador2 estado y acciones
        if (this.j2.Vida > 0) {
            if (this.iniciativa == 2) {
                this.victoriaj2 = (this.j1.Vida <= 0) ? "v" : "m"; //no se que es v y m.. vencedor y muerte?
                if (this.victoriaj2 == "v") {
                    //gana el jugador2
                } else {
                    this.j2.ataque(this.j1);

                    if (this.j1.Vida < 0) {
                        this.j1.Vida = 0;
                    }
                    let reloj = document.getElementById("arena1");
                    reloj.innerHTML = `VIDA JUGADOR 1 : ${this.j1.Vida}`; //no se que es lbact(reloj) ni glad1v(arena1)
                }
            }
        } else {
            //Gana el Jugador 1
            this.ganador = `${this.j1.Nombre} GANA ${this.j2.Nombre} PIERDE`;
            document.getElementById("tierra").onclick = ""; //No se que es fist (tierra)

            let perdedor = document.getElementById("muestraKO");
            perdedor.innerHTML = `${this.j1.Nombre} GANA... ${this.j2.Nombre} PIERDE`;

            partida.equipo1ganador++;

            resolveIn(1000).then(delay => {
                this.clearFight();
            });
        }
    }
}