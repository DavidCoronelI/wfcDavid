const celd = [];
const RCTC = 4; //Reticula o grilla
let alto;
let ancho;

const azulejos = [];
const NA = 16; //Numero de azulejos(imagenes)
const rules = [//Reglas de bordes de cada azulejo
  {//tile 0
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {//tile 1
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },
  {//tile 2
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },
  {//tile 3
    UP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },
  {//tile 4
    UP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },
  {//tile 5
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },
  {//tile 6
    UP: 1,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {//tile 7
    UP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },
  {//tile 8
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 1,
  },
  {//tile 9
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },
  {//tile 10
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {//tile 11
    UP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },
  {//tile 12
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {//tile 13
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {//tile 14
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {//tile 15
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
  },
];

function preload(){
  for (let i = 0; i < NA; i++) {
    azulejos[i] = loadImage('azulejos/tile'+i+'.png');
  }
}


function setup() {
  createCanvas(1080, 1080);

  ancho = width / RCTC;
  alto = height / RCTC;
    
  let opciInc = [];
  for (let i = 0; i < azulejos.length; i++) {
    opciInc.push(i);
  }

  for (let i = 0; i < RCTC * RCTC; i++) {
    celd[i] = {
      colapse: false,
      opci: opciInc,
    };
  }
  // celd[3].colapse = true;
  // celd[10].opci = [5, 6, 4];
  // celd[7].opci = [5, 10, 4];
  // celd[6].opci = [5, 6, 4, 15];
  // celd[13].opci = [5, 6, 4, 9];
  print (celd);
}


function draw() {
  const celdDisp = celd.filter((celda) => celda.colapse == false);

  if (celdDisp.length > 0) {
    celdDisp.sort((a,b)=> {
      return a.opci.length - b.opci.length;
    });

    const celdColapse = celdDisp.filter((celda)=>{
      return celda.opci.length == celdDisp[0].opci.length;
    });

    const celdSelc = random(celdColapse);
    celdSelc.colapse = true;

    const opcSelec = random (celdSelc.opci);
    celdSelc.opci = [opcSelec];    
    
    for (let x = 0; x < RCTC; x++) {
      for (let y = 0; y < RCTC; y++) {
        const cldIndex = x + y * RCTC;
        const cldAct = celd[cldIndex];
        if (cldAct.colapse) {
          image(
            azulejos[cldAct. opci[0]], 
            x * ancho, 
            y * alto,
            ancho,
            alto
            );
        } 
      }
    }
    //noLoop();
  }
}
