//paramétrer la grille
let grille = 20;
let marge = 30;

let sound, amp,timeCode;

let affichage1 = true;
let affichage2 = false;
let affichage3 = false;
let affichage4 = false;
let affichage5 = false;
let affichage6 = false;
let affichage7 = false;
let affichage8 = false;

let temps =0;
 let lissage = 0.05 //ralentir la vitesse de variation de la grille. 19/12 : 0.06 à la base
//ralenti la "vitesse des formes"
let zoom =0.009;





function preload(){
   
  sound = loadSound('sound/DanielMatzinas-StreetCoffee.mp3')
}

function setup() {
    colorMode(HSL)
    createCanvas(windowWidth, windowHeight);
    amp = new p5.Amplitude();
}

//lecture de la musique
function mousePressed(){
 print(timeCode)//impression du time code

 let lecture = sound.isPlaying();
 if(lecture == false){
      sound.play()
 }    
 
}


function draw() {
	if(sound.isPlaying){
		timeCode = sound.currentTime(); ///time code actuel de la musique
	}
   background(255)
  //grille11()

if(affichage1){
grille11();
grille9();
grille5();
}     



if(affichage7){
grille6(); 
}

if(affichage6){
grille11(); 
      }


if(affichage2){
grille11();
grille8();
grille7();
}

if(affichage3){
grille11();
grille6();
grille7();
}

if(affichage4){
grille10(); 
}

if(affichage5){
grille5(); 
        }

        if(affichage8){
grille8(); 
}

if(affichage7){
grille6(); 
        }
        }







function keyPressed(){
   if(key=='1'){
     affichage1 = !affichage1
   }

   if(key=='2'){
     affichage2 = !affichage2
   }

  if(key=='3'){
     affichage3 = !affichage3
  }

  if(key=='4'){
     affichage4 = !affichage4
  }

  if(key=='5'){
     affichage5 = !affichage5
  }

  if(key=='6'){
     affichage6 = !affichage6
  }


   if(key=='7'){
     affichage7 = !affichage7
  }

   if(key=='8'){
     affichage8 = !affichage8
  }
        }


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


///Une fonction = un effet avec une structure similaire


// espèce de bulles qui se forment mais pas de fond
function grille6(){ //VALID
      let level = amp.getLevel();
     
      temps = temps+level*lissage; 

     for (let x = marge; x <width/2; x+=grille) {
      for (let y = marge; y<height-marge; y+=grille) {

 
         let paramX=x*zoom;
         let paramY =y*zoom;
         //ci dessous modifier les paramètres pour afficher des formes 

         let noise3d = noise(paramX,paramY,temps)*360
         //fill(noise3d,50,50)
       //square(x,y,grille)

       let filtre = noise(paramX,paramY,temps)


   
      push()
      translate(x-marge)
      noFill();
      stroke(24,100,85);
      strokeWeight(1)
      ellipse(x,y,noise3d)
      pop()
      

      }
    }
  }


function grille10(){ //VALID //SE DEPLACE PARTOUT SUR LE CANVA. N'est absolument pas logiquement codé mais ça fonctionne
      let level = amp.getLevel();
     
      temps = temps+level*lissage; 

     for (let x = marge; x <width/2; x+=grille) {
      for (let y = marge; y<height-marge; y+=grille) {

 
         let paramX=x*zoom;
         let paramY =y*zoom;
         //ci dessous modifier les paramètres pour afficher des formes 

         let noise3d = noise(paramX,paramY,temps)*360
         //fill(noise3d,50,50)
       //square(x,y,grille)

       let filtre = noise(paramX,paramY,temps)

      angleMode(CENTER)
      push()
      translate(x,y)
      rotate(noise3d, height/2)
      stroke(32, 100, 78);
      strokeWeight(3); 
      fill(24, 100, 24, -0.5*temps)
      ellipse(x,y,noise3d)
      pop()

  
      }
 }
}




function grille4(){
    let level = amp.getLevel();
     
    temps = temps+level*lissage; 

  stroke(0)
  for (let x = marge; x <width-marge; x+=grille) {
      for (let y =marge; y<height-marge; y+=grille) {
       
         let paramX=x*zoom;
         let paramY =y*zoom;

         let noise3d = noise(paramX,paramY,temps)*360
         
         let filtre = noise(paramX,paramY,temps)///valeurs entre 0 et 1

         if(filtre>0.5){
            fill(24,100,16)
            ellipse(x,y,grille,grille+15)
         }
         strokeWeight(5)
         push()
         translate(x,y)
         rotate(noise3d)
         line(0,0,0,grille*100)
         //square(0,0,grille)
         pop()


         
      }
   
 }
}

function grille5(){ //VALID

let level = amp.getLevel();
temps += 0.01;

push();
translate(width / 2, height / 2);

// PLUSIEURS TOURBILLONS — MÊME VITESSE
for (let g = 0; g < 4; g++) {

  let decalage = g * 150; // taille du tourbillon

  for (let i = 0; i < 25; i++) {

    push();

    // MÊME rotation pour tous
    rotate(temps * (i * 0.05 + 0.2));

    let rayon = 40 + i * 8 + decalage;
    let taille = 20 + level * 120;
    let clarté = 25 + i * 4; // changement de lumi

    fill(24, 100, clarté, 30);
    noStroke();
    circle(rayon, 0, taille);

    pop();
  }
}

pop();


}


function grille11(){ //TOURBILLON EN PLUS GRAND

let level = amp.getLevel();
temps += 0.01;

push();
translate(width / 2, height / 2);

// PLUSIEURS TOURBILLONS — MÊME VITESSE
for (let g = 0; g < 4; g++) {

  let decalage = g * 150; // taille du tourbillon

  for (let i = 0; i < 25; i++) {

    push();

    // MÊME rotation pour tous
    rotate(temps * (i * 0.05 + 0.2));

    let rayon = 40 + i * 8 + decalage;
    let taille = 20 + level * 20;
    let clarté = 25 + i * 0.5; // changement de lumi

    fill(24, 100, clarté, 30);
    noStroke();
    circle(rayon*2, 0, taille*16);

    pop();
  }
}

pop();


}



















function grille9(){ //VALID


  let level = amp.getLevel(); // EXPLOSIONS AU DEBUT
  temps += level * 0.4;

  let centreX = width / 2;
  let centreY = height / 2;

  // FLUX GAUCHE — CERCLES
  for (let x = marge; x < width / 2; x += grille) {
    for (let y = marge; y < height - marge; y += grille) {

      let dx = x - centreX;
      let dy = y - centreY;

      let nx = x + dx * temps * 7;
      let ny = y + dy * temps * 7;

      
      fill(23,100,6);
      circle(nx, ny, 25);
    }
  }

  // FLUX DROIT — CARRÉS
  for (let x = width / 2; x < width - marge; x += grille) {
    for (let y = marge; y < height - marge; y += grille) {

      let dx = x - centreX;
      let dy = y - centreY;

      let nx = x + dx * temps * 7;
      let ny = y + dy * temps * 7;

   
      fill(23,100,38);
      square(nx, ny, 25);
    }
  }
}







// function grille9(){ // PULSIOS CERCLES ET CARRES
//   let level = amp.getLevel();
//   temps += level * lissage;

//   let centreX = width / 2;
//   let centreY = height / 2;

//   let force = level * 90; // TRÈS important : petit nombre

//   // FLUX GAUCHE — CERCLES
//   for (let x = marge; x < width / 2; x += grille) {
//     for (let y = marge; y < height - marge; y += grille) {

//       let nx = x + (x - centreX) * force;
//       let ny = y + (y - centreY) * force;

//       fill(24, 100, 20, 0.5);
//       circle(nx, ny, 25);
//     }
//   }

//   // FLUX DROIT — CARRÉS
//   for (let x = width / 2; x < width - marge; x += grille) {
//     for (let y = marge; y < height - marge; y += grille) {

//       let nx = x + (x - centreX) * force;
//       let ny = y + (y - centreY) * force;

//       fill(24, 100, 20, 0.5);
//       square(nx, ny, 25);
//     }
//   }
// }





function grille7(){   // CREER UN EFFET BISCUITS SUR LE BORD GAUCHE (drôle, intéress)


  let level = amp.getLevel();
  temps += level * lissage;

  let centreX = width / 2;
  let centreY = height / 2;

  let mouvement = level * 200;

  // CERCLES (gauche)
  for (let x = marge; x < width/2; x += grille) {
    for (let y = marge; y < height - marge; y += grille) {

      let nx = x;
      let ny = y;

      if (x < centreX) {
        nx = x - mouvement;
      } else {
        nx = x + mouvement;
      }

      if (y < centreY) {
        ny = y - mouvement;
      } else {
        ny = y + mouvement;
      }
      noStroke()
      fill(32,100,72);
      circle(nx, ny, 30);
    }
  }

  // CERCLES (droite)
  for (let x = width/2; x < width - marge; x += grille) {
    for (let y = marge; y < height - marge; y += grille) {

      let nx = x;
      let ny = y;

      if (x < centreX) {
        nx = x - mouvement;
      } else {
        nx = x + mouvement;
      }

      if (y < centreY) {
        ny = y - mouvement;
      } else {
        ny = y + mouvement;
      }
      noStroke()
      fill(24,39,59);
      circle(nx, ny, 25);
    }
  }
}

function grille8(){ //VALID


  let level = amp.getLevel();
    
 temps= temps+level*lissage;

    for (let x = -marge; x < width - marge; x+=15) {
        for (let y = -marge; y < height-marge; y+=15) {

    
            noFill()
            stroke(24,0,91)
            strokeWeight(10*level)
          ellipse(random(x),random(y),random(grille))

          noFill()
          stroke(21,48,10,0.4)
          strokeWeight(10*level)
         ellipse(random(x),random(y),random(grille))

          noFill()
          stroke(24,0,91)
          strokeWeight(10*level)
         ellipse(random(mouseX),random(mouseY),random(grille))

    }
  }
}