let posXnube1 = 263;
let posXnube2 = 74;
let veloc1 = 0.3;
let veloc2 = 0.4;
let pY = -10;
let pY2 = -10;
let pY3 = -10;
let pY4 = -10;
let pY5 = -10;
let pX = Math.random() * 380 + 10;
let pX2 = Math.random() * 380 + 10;
let pX3 = Math.random() * 380 + 10;
let pX4 = Math.random() * 380 + 10;
let pX5 = Math.random() * 380 + 10;
let pY6 = -10;
let pY7 = -10;
let pY8 = -10;
let pY9 = -10;
let pY10 = -10;
let pX6 = Math.random() * 380 + 10;
let pX7 = Math.random() * 380 + 10;
let pX8 = Math.random() * 380 + 10;
let pX9 = Math.random() * 380 + 10;
let pX10 = Math.random() * 380 + 10;
let colorcuadro = 255;
let Pspeed = 1;
let Pspeed2 = 2;
let Pspeed3 = 3;
let Pspeed4 = 4;
let Pspeed5 = 5;
let Pspeed6 = 5;
let Pspeed7 = 4;
let Pspeed8 = 3;
let Pspeed9 = 2;
let Pspeed10 = 1;
let KatSpeed1 = Math.random() * 2 + 1;
let conteo = 0;
let posXKat = Math.random() * 380 + 10;
let posYKat = 200;
let posXpers = 91;
let posYpers = 263;
let menu = 1;
let ayuda1 = 0;
let jugar = 0;
let gover = 0;
let leader = 0;
let musica;
let dot;
let boom;
let boomPlayed = false;

function preload(){
  musica = loadSound('music.wav');
  dot = loadSound('dot.wav');
  boom = loadSound('boom3.wav');
}

function setup() {
  createCanvas(400, 400);
  musica.setVolume(0.2);
}

function draw() {
  
  if (menu === 1) {
    menuprincipal();
  }
  
  if (ayuda1 === 1) {
    ayuda();
  }
  
  if (gover === 1) {
    gameover();
    
    if (boom && !boomPlayed()) {
      boom.setLoop(false);
      boom.play();
      bomPlayed = true;
    }
    
    if (musica && musica.isPlaying()) {
      musica.stop();

      
    }
  }
  
  if (leader === 1) {
    leaderboard();
  }

  if (jugar === 1) {
    juego()
  }
}

// Define las funciones menuprincipal, ayuda, gameover, casa, persona, gato, gatomirror, cometa, arbol, proyectiles, colcuerpo, colcabeza, colcabezamirror, colpers, bloqueosConCometa aquí
function menuprincipal() {
    posXKat = 22;
    textAlign(CENTER, TOP);
    background(97, 130, 158);
    textSize(30);
    fill(0, 0, 0);
    text("PROTECC THE KAT", 115, 67, 170, 190);
    fill(255, 255, 255);
    text("PROTECC THE KAT", 115, 70, 170, 190);
    fill(255, 255, 255);
    rect(150, 240, 100, 30, 5);
    rect(150, 290, 100, 30, 5);
    rect(125, 340, 150, 30, 5);
  
    if (mouseX >= 150 && mouseX <= 250 && mouseY >= 240 && mouseY <= 270) {
      fill(219, 219, 219);
      rect(150, 240, 100, 30, 5);
      if (mouseIsPressed) {
        menu = 0;
        jugar = 1;
        ayuda1 = 0;
        leader = 0;
  
      }
    }
  
    if (mouseX >= 150 && mouseX <= 250 && mouseY >= 290 && mouseY <= 320) {
      fill(219, 219, 219);
      rect(150, 290, 100, 30, 5);
      
      if (mouseIsPressed) {
        ayuda1 = 1;
        menu = 0;
        jugar = 0;
        leader = 0;
      }
    }

    if (mouseX >= 125 && mouseX <= 275 && mouseY >= 340 && mouseY <= 370) {
      fill(219, 219, 219);
      rect(125, 340, 150, 30, 5);
      if (mouseIsPressed) {
        ayuda1 = 0;
        menu = 0;
        jugar = 0;
        leader = 1;
      }
    }
  
    textSize(15);
    fill(0, 0, 0);
    text("JUGAR", 200, 246);
    text("AYUDA", 200, 297);
    text("LEADERBOARD", 200, 348);
    fill(196, 196, 196);
    ellipse(200, 200, 40, 40);
    triangle(posXKat + 164, posYKat - 39, posXKat + 174, posYKat - 21, posXKat + 157, posYKat - 7);
    fill(0, 0, 0);
    triangle(posXKat + 192, posYKat - 41, posXKat + 180, posYKat - 21, posXKat + 197, posYKat - 9);
    ellipse(posXKat + 172, posYKat - 6, 2, 3);
    ellipse(posXKat + 185, posYKat - 6, 2, 3);
    ellipse(posXKat + 178, posYKat + 2, 3, 2);
    line(posXKat + 178, posYKat + 2, posXKat + 212, posYKat - 7);
    line(posXKat + 178, posYKat + 2, posXKat + 212, posYKat + 4);
    line(posXKat + 178, posYKat + 2, posXKat + 137, posYKat - 7);
    line(posXKat + 178, posYKat + 2, posXKat + 137, posYKat + 4);
  }
  
  function ayuda() {
    background(97, 130, 158);
    textSize(30);
    fill(0, 0, 0);
    text("¡CUIDADO!", 115, 67, 170, 190);
    fill(255, 255, 255);
    text("¡CUIDADO!", 115, 70, 170, 190);
    
    textSize(20);
    fill(0, 0, 0);
    text("¡Están lloviendo círculos!", 50, 111, 300, 190);
    fill(255, 255, 255);
    text("¡Están lloviendo círculos!", 50, 113, 300, 190);
    
    fill(0, 0, 0);
    text("Mueve la cometa con el mouse para proteger a Kat y a ti mismo", 50, 152, 300, 190);
    fill(255, 255, 255);
    text("Mueve la cometa con el mouse para proteger a Kat y a ti mismo", 50, 154, 300, 190);
    
    fill(0, 0, 0);
    text("Usa las teclas a y d para moverte y esquivar los proyectiles", 50, 216, 300, 190);
    fill(255, 255, 255);
    text("Usa las teclas a y d para moverte y esquivar los proyectiles", 50, 218, 300, 190);
    
    rect(150, 320, 100, 30, 5);
    
    if (mouseX >= 150 && mouseX <= 250 && mouseY >= 320 && mouseY <= 350) {
      fill(219, 219, 219);
      rect(150, 320, 100, 30, 5);
      if (mouseIsPressed) {
        ayuda1 = 0;
        menu = 1;
        leader = 0;
        jugar = 0;
      }
    }
    
    fill(0, 0, 0);
    textSize(15);
    text("MENÚ", 200, 327);
  }

  function leaderboard() {
    background(97, 130, 158);
    textSize(30);
    fill(0, 0, 0);
    text("¡MEJORES PUNTUACIONES!", 115, 25, 170, 190);
    fill(255, 255, 255);
    text("¡MEJORES PUNTUACIONES!", 115, 28, 170, 190);
    
    textSize(20);
    fill(0, 0, 0);
    text("¡Están lloviendo círculos!", 50, 111, 300, 190);
    fill(255, 255, 255);
    text("¡Están lloviendo círculos!", 50, 113, 300, 190);
    
    fill(0, 0, 0);
    text("Mueve la cometa con el mouse para proteger a Kat y a ti mismo", 50, 152, 300, 190);
    fill(255, 255, 255);
    text("Mueve la cometa con el mouse para proteger a Kat y a ti mismo", 50, 154, 300, 190);
    
    fill(0, 0, 0);
    text("Usa las teclas a y d para moverte y esquivar los proyectiles", 50, 216, 300, 190);
    fill(255, 255, 255);
    text("Usa las teclas a y d para moverte y esquivar los proyectiles", 50, 218, 300, 190);
    
    rect(150, 320, 100, 30, 5);
    
    if (mouseX >= 150 && mouseX <= 250 && mouseY >= 320 && mouseY <= 350) {
      fill(219, 219, 219);
      rect(150, 320, 100, 30, 5);
      if (mouseIsPressed) {
        ayuda1 = 0;
        menu = 1;
        jugar = 0;
        leader = 0;
      }
    }
    
    fill(0, 0, 0);
    textSize(15);
    text("MENÚ", 200, 327);
  }

  function juego() {

    if (jugar === 1 && musica && !musica.isPlaying()) {
      musica.loop();
    }
    
    //FONDO
    background(65, 164, 240);
    
    // PASTO
    fill(32, 128, 35);
    rect(0, 200, 400, 200);

    //SOL
    fill(255, 242, 0);
    ellipse(270, 52, 24, 24);

    //NUBES
    fill(255, 255, 255);
    ellipse(posXnube1, 66, 72, 24);
    ellipse(posXnube2, 107, 72, 24);
    
    posXnube1 -= veloc1;
    posXnube2 += veloc2;
    
    if (posXnube1 < -38 || posXnube1 > 438) {
      veloc1 = -veloc1;
    }
    
    if (posXnube2 > 438 || posXnube2 < -38) {
      veloc2 = -veloc2;
    }
    
    //MOVIMIENTO
    if (keyIsPressed) {
      if (key === 'd' || key === 'D') {
        posXpers += 2;
        if (posXpers + 20 >= 390) {
          posXpers = 370;
        }
      }
      
      if (key === 'a' || key === 'A') {
        posXpers -= 2;
        if (posXpers - 20 <= 5) {
          posXpers = 25;
        }
      }
    }
    casa();
    arbol();
    proyectiles();
    cometa();
    persona();
    colpers();
    
    //CONTADOR DE PUNTOS
    fill(0, 0, 0);
    text(conteo, 18, 8);
    fill(255, 255, 255);
    text(conteo, 18, 10);

    //BLOQUEO CON COMETA
    bloqueosConCometa();

    //MOVIMIENTO DE KAT
    posXKat += KatSpeed1;
    
    if (posXKat + 23 > 390) {
      KatSpeed1 = Math.random() * -2 - 1;
    }
    
    if (posXKat - 45 < 10) {
      KatSpeed1 = Math.random() * 2 + 1;
    }

    if (KatSpeed1 < 0) {
      gato();
    } else {
      gatomirror();
    }
    
    //COLISIONES
    colcuerpo();
    
    if (KatSpeed1 > 0) {
      colcabezamirror();
    } else {
      colcabeza();
    }

    persona();
    
  }
  
  function gameover() {
    
    pY = -100;
    pY2 = -100;
    pY3 = -100;
    pY4 = -100;
    pY5 = -100;
    pY6 = -100;
    pY7 = -100;
    pY8 = -100;
    pY9 = -100;
    pY10 = -100;

    
    
    background(97, 130, 158);
    textSize(25);
    fill(0, 0, 0);
    text("GAME OVER", 200, 132);
    text(conteo, 200, 169);
    fill(255, 255, 255);
    text("GAME OVER", 200, 134);
    fill(255, 255, 255);
    rect(150, 221, 100, 30, 5);
    text(conteo, 200, 171);

    
    if (mouseX > 149 && mouseX < 264 && mouseY > 221 && mouseY < 251) {
      fill(219, 219, 219);
      rect(150, 221, 100, 30, 5);
      
      if (mouseIsPressed) {
        reset();
        gover = 0;
        conteo = 0;
        jugar = 1;

        if (jugar === 1 && musica && !musica.isPlaying()) {
          musica.loop();
        }
      }
    }
    
    fill(0, 0, 0);
    textSize(15);
    text("JUGAR", 126, 227, 150, 90);
    textAlign(CENTER, TOP);
    
    fill(255, 255, 255);
    rect(150, 270, 100, 30, 5);
    
    if (mouseX > 149 && mouseX < 264 && mouseY > 270 && mouseY < 300) {
      fill(219, 219, 219);
      rect(150, 270, 100, 30, 5);
      
      if (mouseIsPressed) {
        gover = 0
        menu = 1
        conteo = 0
      }
    }
    fill(0, 0, 0);
    text("MENÚ", 126, 276, 150, 90);
    textAlign(CENTER, TOP);
  }
  
  function casa() {
    fill(214, 156, 11);
    rect(233, 173, 50, 50);
    fill(133, 44, 56);
    triangle(258, 121, 233, 173, 283, 173);
    rect(248, 193, 19, 30);
    ellipse(263, 211, 5, 5);
  }
  
  function persona() {
    fill(115, 79, 7);
    ellipse(posXpers + 2, posYpers + 2, 30, 30);
    fill(165, 1, 4);
    rect(posXpers - 15, posYpers + 16, 34, 46);
    rect(posXpers + 19, posYpers - 3, 11, 36);
    rect(posXpers - 26, posYpers + 17, 11, 41);
    fill(25, 23, 22);
    rect(posXpers - 14, posYpers + 63, 16, 35);
    rect(posXpers + 1, posYpers + 63, 16, 35);
    fill(230, 163, 87);
    ellipse(posXpers + 25, posYpers - 8, 13, 13);
    ellipse(posXpers - 20, posYpers + 62, 13, 13);
    fill(102, 56, 0);
    rect(posXpers - 14, posYpers + 97, 15, 6);
    rect(posXpers + 2, posYpers + 97, 15, 6);
  }
  function gato() {
    fill(196, 196, 196);
    rect(posXKat - 23, posYKat + 126, 9, 16);
    rect(posXKat + 8, posYKat + 126, 9, 16);
    ellipse(posXKat - 8, posYKat + 125, 57, 17); 
    ellipse(posXKat - 39, posYKat + 114, 20, 20);
    triangle(posXKat - 33, posYKat + 93, posXKat - 32, posYKat + 106, posXKat - 40, posYKat + 104);
    fill(0, 0, 0);
    triangle(posXKat - 49, posYKat + 93, posXKat - 47, posYKat + 107, posXKat - 40, posYKat + 104);
    fill(196, 196, 196);
    rect(posXKat - 30, posYKat + 126, 9, 21);
    rect(posXKat + 3, posYKat + 126, 9, 21);
    bezier(posXKat + 13, posYKat + 127, posXKat + 73, posYKat + 52, posXKat + 26, posYKat + 132, posXKat + 15, posYKat + 129);
    fill(0, 0, 0);
    ellipse(posXKat - 45, posYKat + 112, 1, 2);
    ellipse(posXKat - 38, posYKat + 112, 1, 2);
    ellipse(posXKat - 41, posYKat + 116, 2, 1);
    line(posXKat - 41, posYKat + 117, posXKat - 20, posYKat + 112);
    line(posXKat - 41, posYKat + 117, posXKat - 20, posYKat + 119);
    line(posXKat - 41, posYKat + 117, posXKat - 62, posYKat + 113);
    line(posXKat - 41, posYKat + 117, posXKat - 62, posYKat + 119);
  }
  
  function gatomirror() {
    fill(196, 196, 196);
    rect(posXKat - 23, posYKat + 126, 9, 16);
    rect(posXKat + 8, posYKat + 126, 9, 16);
    ellipse(posXKat - 8, posYKat + 125, 57, 17); 
    ellipse(posXKat + 21, posYKat + 114, 20, 20);
    triangle(posXKat + 14, posYKat + 93, posXKat + 22, posYKat + 104, posXKat + 12, posYKat + 106);
    fill(0, 0, 0);
    triangle(posXKat + 33, posYKat + 93, posXKat + 31, posYKat + 107, posXKat + 22, posYKat + 104);
    fill(196, 196, 196);
    rect(posXKat - 30, posYKat + 126, 9, 21);
    rect(posXKat + 3, posYKat + 126, 9, 21);
    bezier(posXKat - 35, posYKat + 129, posXKat - 110, posYKat + 43, posXKat - 8, posYKat + 139, posXKat - 35, posYKat + 129);
    fill(0, 0, 0);
    ellipse(posXKat + 26, posYKat + 112, 1, 2);
    ellipse(posXKat + 20, posYKat + 112, 1, 2);
    ellipse(posXKat + 23, posYKat + 116, 2, 1);
    line(posXKat + 23, posYKat + 117, posXKat + 44, posYKat + 112);
    line(posXKat + 24, posYKat + 117, posXKat + 44, posYKat + 119);
    line(posXKat + 24, posYKat + 117, posXKat - 2, posYKat + 113);
    line(posXKat + 24, posYKat + 117, posXKat - 2, posYKat + 119);
  }
  
  function cometa() {
    fill(255, 255, 255);
    triangle(mouseX + 2, mouseY - 17, mouseX - 20, mouseY + 1, mouseX + 18, mouseY - 2);
    fill(0, 0, 0);
    triangle(mouseX + 2, mouseY + 24, mouseX - 20, mouseY + 1, mouseX + 18, mouseY - 2);
    line(posXpers + 24, posYpers - 14, mouseX, mouseY);
  }
  
  function arbol() {
    fill(115, 79, 7);
    rect(327, 268, 19, 58);
    fill(30, 143, 34);
    ellipse(336, 198, 60, 175);
  }
  function proyectiles() {
    fill(255, 255, 0);
  
    // Proyectil 1
    ellipse(pX, pY, 10, 10);
    pY += Pspeed;
    if (pY >= 400) {
      pY = -10;
      pX = Math.random() * 380 + 10;
      Pspeed = Math.random() * 4 + 1;
    }
  
    // Proyectil 2
    ellipse(pX2, pY2, 10, 10);
    pY2 += Pspeed2;
    if (pY2 >= 400) {
      pY2 = -10;
      pX2 = Math.random() * 380 + 10;
      Pspeed2 = Math.random() * 4 + 1;
    }
  
    // Proyectil 3
    ellipse(pX3, pY3, 10, 10);
    pY3 += Pspeed3;
    if (pY3 >= 400) {
      pY3 = -10;
      pX3 = Math.random() * 380 + 10;
      Pspeed3 = Math.random() * 4 + 1;
    }
  
    // Proyectil 4
    ellipse(pX4, pY4, 10, 10);
    pY4 += Pspeed4;
    if (pY4 >= 400) {
      pY4 = -10;
      pX4 = Math.random() * 380 + 10;
      Pspeed4 = Math.random() * 4 + 1;
    }
  
    // Proyectil 5
    ellipse(pX5, pY5, 10, 10);
    pY5 += Pspeed5;
    if (pY5 >= 400) {
      pY5 = -10;
      pX5 = Math.random() * 380 + 10;
      Pspeed5 = Math.random() * 4 + 1;
    }
  
    // Proyectiles adicionales según el conteo
    if (conteo >= 25) {
      ellipse(pX6, pY6, 10, 10);
      pY6 += Pspeed6;
      if (pY6 >= 400) {
        pY6 = -10;
        pX6 = Math.random() * 380 + 10;
        Pspeed6 = Math.random() * 4 + 1;
      }
    }
  
    if (conteo >= 50) {
      ellipse(pX7, pY7, 10, 10);
      pY7 += Pspeed7;
      if (pY7 >= 400) {
        pY7 = -10;
        pX7 = Math.random() * 380 + 10;
        Pspeed7 = Math.random() * 4 + 1;
      }
    }
  
    if (conteo >= 75) {
      ellipse(pX8, pY8, 10, 10);
      pY8 += Pspeed8;
      if (pY8 >= 400) {
        pY8 = -10;
        pX8 = Math.random() * 380 + 10;
        Pspeed8 = Math.random() * 4 + 1;
      }
    }
  
    if (conteo >= 100) {
      ellipse(pX9, pY9, 10, 10);
      pY9 += Pspeed9;
      if (pY9 >= 400) {
        pY9 = -10;
        pX9 = Math.random() * 380 + 10;
        Pspeed9 = Math.random() * 4 + 1;
      }
    }
  
    if (conteo >= 125) {
      ellipse(pX10, pY10, 10, 10);
      pY10 += Pspeed10;
      if (pY10 >= 400) {
        pY10 = -10;
        pX10 = Math.random() * 380 + 10;
        Pspeed10 = Math.random() * 4 + 1;
      }
    }
  }

function reset(){
  posXnube1 = 263;
    posXnube2 = 74;
    conteo = 0;
    posXKat = Math.random() * 380 + 10;
    posYKat = 200;
    posXpers = 91;
    posYpers = 263;
    KatSpeed1 = Math.random() * 2 + 1;
    // Reinicia proyectiles, nube, etc.
}

  function colcuerpo() {
    if (pY >= 332 && pY <= 350 && pX >= (posXKat - 8) - 28 && pX < (posXKat - 8) + 28) {
      jugar = 0;
      gover = 1;
    }
  
    if (pY2 >= 332 && pY2 <= 350 && pX2 > (posXKat - 8) - 28 && pX2 < (posXKat - 8) + 28) {
      gover = 1;
      jugar = 0;
    }
  
    if (pY3 >= 332 && pY3 <= 350 && pX3 > (posXKat - 8) - 28 && pX3 < (posXKat - 8) + 28) {
      jugar = 0;
      gover = 1;
    }
    
    if (pY4 >= 332 && pY4 <= 350 && pX4 > (posXKat - 8) - 28 && pX4 < (posXKat - 8) + 28) {
      jugar = 0;
      gover = 1;
    }
    
    if (pY5 >= 332 && pY5 <= 350 && pX5 > (posXKat - 8) - 28 && pX5 < (posXKat - 8) + 28) {
      jugar = 0;
      gover = 1;
    }
    
    if (pY6 >= 332 && pY6 <= 350 && pX6 > (posXKat - 8) - 28 && pX6 < (posXKat - 8) + 28) {
      jugar = 0;
      gover = 1;
    }
    
    if (pY7 >= 332 && pY7 <= 350 && pX7 > (posXKat - 8) - 28 && pX7 < (posXKat - 8) + 28) {
      jugar = 0;
      gover = 1;
    }
    
    if (pY8 >= 332 && pY8 <= 350 && pX8 > (posXKat - 8) - 28 && pX8 < (posXKat - 8) + 28) {
      jugar = 0;
      gover = 1;
    }
    
    if (pY9 >= 332 && pY9 <= 350 && pX9 > (posXKat - 8) - 28 && pX9 < (posXKat - 8) + 28) {
      jugar = 0;
      gover = 1;
    }
    
    if (pY10 >= 332 && pY10 <= 350 && pX10 > (posXKat - 8) - 28 && pX10 < (posXKat - 8) + 28) {
      jugar = 0;
      gover = 1;
    }
  }
  
  function colcabeza() {
    if (pY >= 314 && pY <= 334 && pX >= (posXKat - 39) - 13 && pX < (posXKat - 39) + 13) {
      jugar = 0;
      gover = 1;
    }
  }
  
  function colcabezamirror() {
    if (pY >= 314 && pY <= 334 && pX >= (posXKat + 20) - 13 && pX < (posXKat + 20) + 13) {
      jugar = 0;
      gover = 1;
    }
  }
  function colpers() {
    // Colisiones con el personaje
    const colisiones = [
      { pY, pX },
      { pY: pY2, pX: pX2 },
      { pY: pY3, pX: pX3 },
      { pY: pY4, pX: pX4 },
      { pY: pY5, pX: pX5 },
      { pY: pY6, pX: pX6 },
      { pY: pY7, pX: pX7 },
      { pY: pY8, pX: pX8 },
      { pY: pY9, pX: pX9 },
      { pY: pY10, pX: pX10 }
    ];
  
    colisiones.forEach(({ pY, pX }) => {
      if (
        (pY >= 278 && pY <= 372 && pX >= posXpers - 20 && pX < posXpers + 20) ||
        (pY >= 250 && pY <= 298 && pX >= posXpers + 18 && pX < posXpers + 35) ||
        (pY >= 250 && pY <= 275 && pX >= posXpers - 15 && pX < posXpers + 18) ||
        (pY >= 278 && pY <= 335 && pX >= posXpers - 28 && pX < posXpers + 20)
      ) {
        jugar = 0;
        gover = 1;
      }
    });
  }
  
  function bloqueosConCometa() {
    if (pY > (mouseY - 17) && pY < (mouseY + 24) && pX > mouseX - 20 && pX < mouseX + 18        ) {
      pY = -10 + Pspeed;
      pX = random (10,390);
      Pspeed = random (1,5);
      conteo = conteo + 1;
      dot.play();
      }
  
  if (pY2 > (mouseY - 17) && pY2 < (mouseY + 24) && pX2 > mouseX - 20 && pX2 < mouseX         + 18) {
      pY2 = -10 + Pspeed2;
      pX2 = random (10,390);
      Pspeed2 = random (1,5);
      conteo = conteo + 1;
      dot.play();
      }
  
  if (pY3 > (mouseY - 17) && pY3 < (mouseY + 24) && pX3 > mouseX - 20 && pX3 < mouseX         + 18) {
      pY3 = -10 + Pspeed3;
      pX3 = random (0,390);
      Pspeed3 = random (1,5);
      conteo = conteo + 1;
      dot.play();
      }
  
  if (pY4 > (mouseY - 17) && pY4 < (mouseY + 24) && pX4 > mouseX - 20 && pX4 < mouseX         + 18) {
      pY4 = -10 + Pspeed4;
      pX4 = random (0,390);
      Pspeed4 = random (1,5);
      conteo = conteo + 1;
      dot.play();
      }
  
  if (pY5 > (mouseY - 17) && pY5 < (mouseY + 24) && pX5 > mouseX - 20 && pX5 < mouseX         + 18) {
      pY5 = -10 + Pspeed5;
      pX5 = random (0,390);
      Pspeed5 = random (1,5);
      conteo = conteo + 1;
      dot.play();
      }
  
  if (pY6 > (mouseY - 17) && pY6 < (mouseY + 24) && pX6 > mouseX - 20 && pX6 < mouseX         + 18) {
      pY6 = -10 + Pspeed6;
      pX6 = random (0,390);
      Pspeed6 = random (1,5);
      conteo = conteo + 1;
      dot.play();
      }
  
  if (pY7 > (mouseY - 17) && pY7 < (mouseY + 24) && pX7 > mouseX - 20 && pX7 < mouseX         + 18) {
      pY7 = -10 + Pspeed7;
      pX7 = random (0,390);
      Pspeed7 = random (1,5);
      conteo = conteo + 1;
      dot.play();
      }
  
  if (pY8 > (mouseY - 17) && pY8 < (mouseY + 24) && pX8 > mouseX - 20 && pX8 < mouseX         + 18) {
      pY8 = -10 + Pspeed8;
      pX8 = random (0,390);
      Pspeed8 = random (1,5);
      conteo = conteo + 1;
      dot.play();
      }
  
  if (pY9 > (mouseY - 17) && pY9 < (mouseY + 24) && pX9 > mouseX - 20 && pX9 < mouseX         + 18) {
      pY9 = -10 + Pspeed9;
      pX9 = random (0,390);
      Pspeed9 = random (1,5);
      conteo = conteo + 1;
      dot.play();
      }

  if (pY10 > (mouseY - 17) && pY10 < (mouseY + 24) && pX10 > mouseX - 20 && pX10 < mouseX         + 18) {
      pY10 = -10 + Pspeed10;
      pX10 = random (0,390);
      Pspeed10 = random (1,5);
      conteo = conteo + 1;
      dot.play();
      }
    }
