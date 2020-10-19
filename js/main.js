let partida = {
    equipo1: [],
    equipo2: [],
    equipo1ganador: 0,
    equipo2ganador: 0,
    equipo2posibles: [],
    cont: 0,
    cont_lucha: 0,
    info_lucha: "",
    argumento1: "",
    argumento2: "",

    elige1(idluchador) {
        this.equipo1.push(jugadores[idluchador]);


        if (this.equipo1.length < 4) {
            document.getElementById(idluchador).className = "perssel";
            document.getElementById(idluchador).onclick = "";
        }
        for (let _x = 0; _x < this.equipo1.length; _x++) {
            this.info_lucha = document.getElementById("j1t" + _x);
            this.info_lucha.innerHTML = `${this.equipo1[_x].Nombre} <br><br>Fuerza: ${this.equipo1[_x].Fuerza}<br><br>
            Defensa: ${this.equipo1[_x].Defensa}<br><br> Suerte: ${this.equipo1[_x].Suerte}<br><br> `;
        }
        //Delay y levantamos función para detectar los personajes del player1
        if (this.equipo1.length == 3) {
            //Inhabilitamos el click en todas las imágenes
            for (_r = 1; _r < 10; _r++) {
                document.getElementById(_r).onclick = "";
            }
            resolveIn(2000).then((delay) => {
                this.entrada3();
            });
        }
    },
    elige2(idluchador2, idluchador2_d) {

        this.info_lucha = "";
        this.equipo2.push(this.equipo2posibles[idluchador2]);

        if (this.equipo2.length < 4) {
            document.getElementById(idluchador2_d).className = "perssel";
            document.getElementById(idluchador2_d).onclick = "";
        }

        for (let _c = 0; _c < this.equipo2.length; _c++) {
            this.info_lucha = document.getElementById("j2t" + _c);

            this.info_lucha.innerHTML = `${this.equipo2[_c].Nombre} <br><br>Fuerza: ${this.equipo2[_c].Fuerza}<br><br>
            Defensa: ${this.equipo2[_c].Defensa}<br><br> Suerte: ${this.equipo2[_c].Suerte}<br><br> `;
        }
        //Delay y levantamos función para detectar los personajes del player2
        if (this.equipo2.length == 3) {
            for (_r2 = 11; _r2 < 17; _r2++) {
                document.getElementById(_r2).onclick = "";
            }
            resolveIn(2000).then((delay) => {
                this.entrada4();
            });
        }
    },
    entrada1() {
        this.organizer(1);
    },
    entrada2() {
        this.organizer(2);
    },
    entrada3() {
        this.organizer(3);

        this.equipo2posibles = [l1, l2, l3, l4, l5, l6, l7, l8];
        this.equipo2posibles = this.equipo2posibles.filter((val) => !this.equipo1.includes(val));

        let colmada_r2 = document.getElementById("area3");
        colmada_r2.innerHTML = `<div class="ajustes">
        <div class="subAjustes">
            <div class="caras">
                <div class="carasFuera">

                </div>
                <div class="carasDentro">
                    <div class="pers"></div>
                    <div class="pers"><img src="img/${this.equipo2posibles[0].Nombre}.png" alt="" id="11" onclick="partida.elige2(0,11)">
                        <div class="nombre">${this.equipo2posibles[0].Nombre}</div>
                    </div>
                    <div class="pers"><img src="img/${this.equipo2posibles[1].Nombre}.png" alt="" id="12" onclick="partida.elige2(1,12)">
                        <div class="nombre">${this.equipo2posibles[1].Nombre}</div>
                    </div>
                    <div class="pers"><img src="img/${this.equipo2posibles[2].Nombre}.png" alt="" id="13" onclick="partida.elige2(2,13)">
                        <div class="nombre">${this.equipo2posibles[2].Nombre}</div>
                    </div>
                    <div class="pers"><img src="img/${this.equipo2posibles[3].Nombre}.png" alt="" id="14" onclick="partida.elige2(3,14)">
                        <div class="nombre">${this.equipo2posibles[3].Nombre}</div>
                    </div>
                    <div class="pers"><img src="img/${this.equipo2posibles[4].Nombre}.png" alt="" id="15" onclick="partida.elige2(4,15)">
                        <div class="nombre">${this.equipo2posibles[4].Nombre}</div>
                    </div>
                    <div class="pers"><img src="img/${this.equipo2posibles[5].Nombre}.png" alt="" id="16" onclick="partida.elige2(5,16)">
                        <div class="nombre">${this.equipo2posibles[5].Nombre}</div>
                    </div>
                    <div class="pers"></div>
                </div>
            </div>
            <div class="mensaje1">JUGADOR 2<br><br> - ELIGE 3 PERSONAJES -</div>
            
            <div class="magia">
                <div class="juegaIzq"></div>
                <div id="j2t0" class="j1l"></div>
                <div id="j2t1" class="j1l"></div>
                <div id="j2t2" class="j1l"></div>
                <div class="juegaDer"></div>
            </div>
        </div>
    </div>
    </div>`;
    },
    entrada4() {
        this.organizer(4);

        let colmada_xx = document.getElementById("area4");
        colmada_xx.innerHTML = `<div class="ajustes">
        <div class="preGanador">
            <div class="preparado">
                <div class="preparado1"></div>
                <div class="preparado2">LA BATALLA ESTA A PUNTO DE COMENZAR...PREPARATE!</div>
            </div>
            <div class="espera">
                <div class="esperaDentro">
                    <div class="preRonda0"></div>
                    <div class="preRonda1">
                        <img src="img/${this.equipo1[0].Nombre}.png" alt=""> VS
                        <img src="img/${this.equipo2[0].Nombre}.png" alt="">
                    </div>

                    <div class="preRonda0"></div>

                    <div class="preRonda1">
                        <img src="img/${this.equipo1[1].Nombre}.png" alt=""> VS
                        <img src="img/${this.equipo2[1].Nombre}.png" alt="">
                    </div>
                </div>
            </div>
        </div>`;

        resolveIn(2550).then(delay => {
            this.entrada5();
        });
    },
    entrada5() {
        this.organizer(5);

        if (this.cont_lucha < 2) {
            argumento1 = this.equipo1[this.cont_lucha];
            argumento2 = this.equipo2[this.cont_lucha];

            let colmada_xxx = document.getElementById("area5");
            colmada_xxx.innerHTML =
                `<div class="prePelea">
                <div class="prePelea1"></div>
                <div class="prePelea2">LUCHA ${this.cont_lucha +1}</div>
                <div class="prePelea3"></div>
            </div>
            <div class="pelea">
                <div class="primero">
                    <div class="aspirante1">${this.equipo1[this.cont_lucha].Nombre}</div>
                    <div class="aspirante1img"><img src="img/${this.equipo1[this.cont_lucha].Nombre}.png"></div>
                    <div id="arena1" class="asp1vida">JUGADOR 1 VIDA : ${this.equipo1[this.cont_lucha].Vida}</div>
                </div>
            <div class="segundo">
                <div class="aspirante2">${this.equipo2[this.cont_lucha].Nombre}</div>
                <div class="aspirante2img"><img src="img/${this.equipo2[this.cont_lucha].Nombre}.png"></div>
                <div id="arena2" class="asp2vida">JUGADOR 2 VIDA : ${this.equipo2[this.cont_lucha].Vida}</div>
            </div>
        </div>
            <div class="resolucion">
                <div class="ress1"></div>
                <div class="ress2"></div>
                <div class="ress3"></div>
            </div>
            <div class="golpeador">
                <div class="golp1"></div>
                <div class="golp2"><img id="duele" class="dolor" src="img/g22.png" onclick="juego.mainFight(argumento1, argumento2)"></div> 
                <div class="golp3"></div>
            </div>
        </div>`;
        } else {
            resolveIn(1500).then((delay) => {
                this.entrada6();
            });
        }
    },
    entrada6() {
        this.organizer(6);

        let endA = 0;
        let endB = 0;
        let win = "";

        if (this.equipo1ganador > this.equipo2ganador) {
            endA = 1;
            endB = this.equipo1ganador;
            win = this.equipo1;
        } else {
            endA = 2;
            endB = this.equipo2ganador;
            win = this.equipo2;
        };

        let colmada_final = document.getElementById("area6");
        colmada_final.innerHTML = `<div class="ajustes">
            <div class="winner">
                <div class="winnerTeam">EQUIPO ${endA}</div>
                <div class="winInfo">
                    <div class="jugadorWinInfo">JUGADOR ${endA} GANA ${endB} COMBATES DE 2</div>
                    <div class="infoExtra">
                        <div class="imgGanadora"><img src="img/${win[0].Nombre}.png" alt="">
                        <img src="img/${win[1].Nombre}.png" alt="">
                        <img src="img/${win[2].Nombre}.png" alt=""></div>
                        <div class="logoGanador"><img src="img/winner.png"></div>
                        <div class="elixir"><p class="otra" onclick="partida.entrada1()">JUGAMOS DE NUEVO?</p></div>
                        <div class="margenGanador"></div>
                    </div>
                </div>
            </div>
        </div>`;
    },
    organizer(argumento_O) {
        let nuevaFase = "area" + argumento_O;
        let arrFase = ["area1", "area2", "area3", "area4", "area5", "area6"];

        arrFase = arrFase.filter((val) => !nuevaFase.includes(val));

        document.getElementById(nuevaFase).style.display = "block";

        for (let _a of arrFase) {
            document.getElementById(_a).style.display = "none";
        }
    },
};




// fetch("https://rickandmortyapi.com/api/character/?page=9")
//     .then(response => response.json())
//     .then(data => makeCards(data.results))


// function makeCards(charactersArray) {
//     const cardContainer = document.querySelector('#card-container')
//     charactersArray.forEach(character => {
//         cardContainer.innerHTML = cardContainer.innerHTML +
//             `<div id='character-card-${character.id}'>
//             <h4>${character.name}</h4>
//             <img src=${character.image}></img>
//             </div>`
//     })
// }

// function getRandom() {
//     return Math.random();
// }