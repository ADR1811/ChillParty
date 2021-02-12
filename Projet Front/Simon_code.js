var predef = ["green", "red", "blue", "yellow"];
var listejoueur = [];
var listepc=[]
listepc.push(predef[(Math.floor(Math.random() * predef.length))]);
var score = 0;

console.log(listejoueur);
console.log(listepc);

function Start(){
    document.getElementById("info").classList.add("cache");
    document.getElementById("regles").classList.add("cache");
    document.getElementById("start").classList.add("cache");
    //Premier clignotement
    console.log(listepc)
    let t = 0;
    for(c = 0; c < listepc.length ; c = c + 1){
        console.log("dans le for");
        setTimeout(Clignotement,t,listepc[c]);
        t = t + 1000;
        console.log(t)
    }
}
function Clignotement(color){
    console.log("clignotement")
    if (color=="red"){
        document.getElementById(color).style.backgroundColor="lightsalmon";
    }
    else if (color=="blue"){
        document.getElementById(color).style.backgroundColor="lightblue";
    }
    else if (color=="yellow"){
        document.getElementById(color).style.backgroundColor="lightyellow";
    }
    else if (color=="green"){
        document.getElementById(color).style.backgroundColor="lightgreen";
    }
    setTimeout(function(){document.getElementById(color).style.backgroundColor=color; }, 500);
}

function Regles(){
    document.getElementById("regles").classList.toggle("cache");
}
function Choice(color){
    listejoueur.push(color);
    for(var i=0; i < listejoueur.length; i++){
        if (listejoueur[i] != listepc[i]) {
            alert("Mauvaise Réponse!");
            document.getElementById("yellow").classList.add("cache");
            document.getElementById("red").classList.add("cache");
            document.getElementById("green").classList.add("cache");
            document.getElementById("blue").classList.add("cache");
            document.getElementById("regles").classList.add("cache");
            document.getElementById("lose").classList.remove("cache");
            break;
        }
    }
    if(listejoueur.length==listepc.length){
        listepc.push(predef[(Math.floor(Math.random() * predef.length))]);
        listejoueur=[];
        //Clignotement
        score = score+1;
        alert("Score : "+score);
        Start();
    }
    console.log(listejoueur);
    console.log(listepc);
}