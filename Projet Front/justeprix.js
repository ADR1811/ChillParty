//lorsque l'on clique sur reset alors la page va reset
// location.reload() fonction trouvé sur youtube via le lien(https://www.youtube.com/watch?v=Azl6WzYuvgM&ab_channel=Nestfy);
reset.onclick = () => {
    location.reload();
}
// tant que le button start est cliqué alors on ajoute 
//la class caché(qui est display none) a l'id start et on surpprime 
//la class caché de l'id stop qui va affiché le jeu
start.onclick = () => {
    
    document.getElementById("stop").classList.remove("caché");
    document.getElementById("start").classList.add("caché");
    document.getElementById("chrono").classList.remove("caché");
// tout le 1 seconde la fonction chrono se lance
setInterval(chrono, 1000);
// créations des variable time (30s) et de time_chrono qui va me permettre de print le chrono
var time = Math.floor(60);
const time_chrono = document.getElementById("time");

function chrono(){
// si time (30) est différent de 0, alors on enlève -1s
// et on print le temps qui reste.
    if (time !== 0){
        time -=1;
        time_chrono.innerHTML = `Il te reste, ${time}`;
    }
    //si time vérifie 0 alors on print stop tu a perdu.
    // et je cache tout sauf le reset et l'id time qui est le chrono et donc la phrase de défaite.
    else if (time == 0){
        time_chrono.innerHTML = "STOP,t'as perdu";
        document.getElementById('btn').classList.add("caché");
        document.getElementById('response').classList.add("caché");
        document.getElementById("reset").classList.remove("caché");
    }
}

}
// associe chaque variable a mes id et création de la variable aléatoire qui stocke une valeur aléatoire
var btn = document.getElementById('btn');
var res = document.getElementById('result');
var rep = document.getElementById('response');
let aleatoire = Math.floor(Math.random() * (100));
// button (id btn) est cliqué alors le juste prix se lance
btn.onclick = () => {
    // si la reponse est suppérieur au nombre aléatoire
    //alors on affiche c'est moins , si il est inférieur alors c'est plus
    // sinon c'est bravo.
    if(rep.value > aleatoire) {
        res.innerHTML = "C'est moins"
    } else if(rep.value < aleatoire) {
        res.innerHTML = "C'est plus"
    } else if (rep.value == aleatoire) {
        res.innerHTML = "Bravo"
        document.getElementById('btn').classList.add("caché");
        document.getElementById('response').classList.add("caché");
        document.getElementById("chrono").classList.add("caché");
        document.getElementById("reset").classList.remove("caché");
    }
};