
//prend en parametre un tableau d'element html renvoie un element au hasard
function easy(plateau){
    var x = Math.floor(Math.random()*plateau.length);
    var e = plateau[x];
    return e;
};


//prend un tableau d'element html, renvoie un element html pour empecher le joueuer de gagner (aleatoire sinon);
//prend un tableau representant les ligne gagnante
function medium (plateau, tab){
  var intel = false; //pour le cas ou l'ia joue par rapport aujouer sinon joue au hasard
  for (var i = 0; i < tab.length; i++) {
    var compteur = 0;
    var e = undefined;
    for (var j = 0; j < tab[j].length; j++) {
      if(tab[i][j].value == PLAYER){
          compteur++;
      }
      if(tab[i][j].value == 0){
          e = tab[i][j];
      }
    }
    if(compteur == 2){
      intel = true;
      if(e){
          return e;
      }
    }
  }
  if(!intel){
    var x = Math.floor(Math.random()*plateau.length);
    var e = plateau[x];
    return e;
  }
};

//prend un tableau d'element html, renvoie un element html pour empecher le joueuer de gagner
//ou de gagner elle si possible (aleatoire sinon);
//prend un tableau representant les ligne gagnante
function hard(plateau, tab){
  var intel = false;
  //verifie si elle peu gagner
  for (var i = 0; i < tab.length; i++) {
    var compteur = 0;
    var e = undefined;
    for (var j = 0; j < tab[j].length; j++) {
      if(tab[i][j].value == IA){
          compteur++;
      }
      if(tabIa[i][j].value == 0){
          e = tab[i][j];
      }
    }
    if(compteur == 2){
      if(e && e.value != PLAYER){
        intel = true;
          return e;
      }
    }
  }
  for (var i = 0; i < tab.length; i++) {
    var compteur = 0;
    var e = undefined;
    for (var j = 0; j < tab[j].length; j++) {
      if(tab[i][j].value == PLAYER){
          compteur++;
      }
      if(tabIa[i][j].value == 0){
          e = tab[i][j];
      }
    }
    if(compteur == 2){
      intel = true;
      if(e){
          return e;
      }
    }
  }
  //test de toute les case a coter de celle jouer pour en trouver une non jouer
  //si aucune posibiliter, l'ia joue au hasard
  for (var i = 0; i < tab.length; i++) {
    for (var j = 0; j < tab[i].length; j++) {
      if(tab[i][j].value == IA){
          if (tab[i][j+1]) {
            if (tab[i][j+1] == 0) {
                e = tab[i][j+1];
                return e;
            }
          }else if (tab[i][j-1]) {
             if (tab[i][j-1] == 0) {
               e = tab[i][j-1];
               return e;
             }
          }else if (tab[i+1][j]) {
             if (tab[i+1][j] == 0) {
               e = tab[i+1][j];
               return e;
             }
          }else if (tab[i-1][j]) {
             if (tab[i-1][j] == 0) {
               e = tab[i-1][j];
               return e;
             }
          }else if (tab[i-1][j+1]) {
             if (tab[i-1][j+1] == 0) {
               e = tab[i-1][j+1];
               return e;
             }
          }else if (tab[i-1][j-1]) {
             if (tab[i-1][j-1] == 0) {
               e = tab[i-1][j-1];
               return e;
             }
          }else if (tab[i+1][j+1]) {
             if (tab[i+1][j+1] == 0) {
               e = tab[i+1][j+1];
               return e;
             }
          }else if (tab[i+1][j-1]) {
             if (tab[i+1][j-1] == 0) {
               e = tab[i+1][j-1];
               return e;
             }
          }
      }
    }
  }
    var x = Math.floor(Math.random()*plateau.length);
    var e = plateau[x];
    return e;
}

function extreme(plateau, plateauIa, tab){
    var e;//representent la case jouez
    //gestion du cas central (joueur joue au centre au premier coup)
    if(plateau[1][1].value == PLAYER){
      console.log("bonjour");
        if(plateau[1][1].value == PLAYER && indexnul == 1){//indexnul ici sert a verifier que ces la premiere action de l'ia
            e = plateau[0][0];
            return e;
        }
        if(plateau[1][1].value == PLAYER && indexnul == 3 && plateau[2][2].value == PLAYER){
            e = plateau[0][2];
            return e;
        }
  }else if (indexnul == 1 && plateau[1][1] != PLAYER) {
      e = plateau[1][1];
      return e;
  }
  if(indexnul == 3){
      //-X-   //--X   //-X-
      //X0-   //X0-   //-0-
      //---   //---   //X--
      if((plateau[1][0].value == PLAYER && (plateau[0][1].value == PLAYER || plateau[0][2].value == PLAYER))
       || plateau[2][0].value == PLAYER && plateau[0][1].value == PLAYER){
          e = plateau[0][0];
          return e;
      }
      //-X-   //-X-   //X--
      //-0X   //-0-   //-0X
      //---   //--X   //---
      else if ((plateau[0][1].value == PLAYER && (plateau[2][1].value == PLAYER || plateau[1][2].value == PLAYER))
             || plateau[0][0].value == PLAYER && plateau[1][2].value == PLAYER  ) {
          e = plateau[0][2];
          return e;
      }
      //---   //---   //--X
      //-0X   //-0X   //-0-
      //-X-   //X--   //-X-
      else if ((plateau[1][2].value == PLAYER && (plateau[2][1].value == PLAYER || plateau[2][0].value == PLAYER))
            ||  plateau[2][1].value == PLAYER && plateau[0][2].value == PLAYER) {
          e = plateau[2][2];
          return e;
      }
      //---   //X--  //---
      //X0-   //-0-  //X0-
      //-X-   //-X-  //--X
      else if((plateau[2][1].value == PLAYER && (plateau[0][0].value == PLAYER || plateau[0][1].value == PLAYER))
            || plateau[1][0].value == PLAYER && plateau[2][2].value == PLAYER){
          e = plateau[2][0];
          return e;
      }
      //--X   //X--
      //-0-   //-0-
      //X--   //--X
      else if ((plateau[0][2].value == PLAYER && plateau[2][0].value == PLAYER) || (plateau[0][0].value == PLAYER && plateau[2][2].value == PLAYER)) {
          e = plateau[0][1];
          return e;
      }
  }
  //copie de l'ia difficile a la zeubie
  var intel = false;
  //verifie si elle peu gagner
  for (var i = 0; i < tab.length; i++) {
    var compteur = 0;
    var e = undefined;
    for (var j = 0; j < tab[j].length; j++) {
      if(tab[i][j].value == IA){
          compteur++;
      }
      if(tabIa[i][j].value == 0){
          e = tab[i][j];
      }
    }
    if(compteur == 2){
      if(e && e.value != PLAYER){
        intel = true;
          return e;
      }
    }
  }
  for (var i = 0; i < tab.length; i++) {
    var compteur = 0;
    var e = undefined;
    for (var j = 0; j < tab[j].length; j++) {
      if(tab[i][j].value == PLAYER){
          compteur++;
      }
      if(tabIa[i][j].value == 0){
          e = tab[i][j];
      }
    }
    if(compteur == 2){
      intel = true;
      if(e){
          return e;
      }
    }
  }

  //en dernier recours l'ia joue au hasard
  var x = Math.floor(Math.random()*plateauIa.length);
  var e = plateauIa[x];
  return e;
}
