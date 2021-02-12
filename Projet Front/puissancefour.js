function myFunction(tours,lid,numcol) {
    if (jeuencour==true) {
        verif(turn);
        color=colorTurn(tours,numcol);
        let encour=false;
        let i=5;
        let g=0;
        let mec=numcol-1;
        xmemory=0;
        ymemory=0;
        idmemory=0;
        colormemory=color;

        if(tableau[0][numcol-1]=="white"){
            document.getElementById(lid+6).style.backgroundColor = color;
            tableau[0][numcol-1]=color;
            xmemory=numcol-1;
            ymemory=0;
            idmemory=lid+6;
            WinOrNot(mec,0,color)
            
        }

        else if (tableau[0][numcol-1]!="white"){
            g=1;
            do{
                if(tableau[g][numcol-1]=="white"){
                    document.getElementById(lid+i).style.backgroundColor = color;
                    tableau[g][numcol-1]=color;
                    xmemory=numcol-1;
                    ymemory=g;
                    idmemory=lid+i;
                    WinOrNot(mec,g,color)
                    encour=true;
                }
                i=i-1;
                g=g+1;
            }while(encour==false)

        }
    }         
}

function colorTurn(couleur,numerocolonne){
if (couleur==0){
    if (tableau[5][numerocolonne-1]=="white"){
        turn=1;
        return "red";
    }
}
else{
    if (tableau[5][numerocolonne-1]=="white"){
        turn=0;
        return "yellow";
    }
}
}

function WinOrNot(x,y,unecouleur)
{
let win=false
let compteur=0;
let hauteur=y;
/* VERIFICATION SUR UNE COLONNE*/
while(hauteur>=0){
    if (tableau[hauteur][x]==unecouleur){
        compteur=compteur+1;
        hauteur=hauteur-1;
    }
    else if(tableau[hauteur][x]!=unecouleur){
        
        break
    }
    if(compteur==4){
        Win(unecouleur);
        return true
    }
    
}
/* VERIFICATION SUR UNE LIGNE*/
compteur=1;
let gauche=x-1;
let droite=x+1;
while (gauche>=0){
    if (tableau[y][gauche]==unecouleur){
        compteur=compteur+1;
        gauche=gauche-1;
    }
    else if(tableau[y][gauche]!=unecouleur){
        break
    }
    if(compteur==4){
        Win(unecouleur);
        return true
    }
}


while (droite<=6){
    if (tableau[y][droite]==unecouleur){
        compteur=compteur+1;
        droite=droite+1;
    }
    else if(tableau[y][droite]!=unecouleur){
        break
    }
    if(compteur==4){
        Win(unecouleur);
        return true
    }
}
/*VERIFICATION SUR LES DIAGONALES*/
/*verification sur la diagonale bas gauche vers haut droit*/
compteur=1;
let gauchex=x-1;
let gauchey=y-1;
let droitex=x+1;
let droitey=y+1;

while(gauchex>=0 && gauchey>=0){
    if(tableau[gauchey][gauchex]==unecouleur){
        compteur=compteur+1;
        gauchey=gauchey-1;
        gauchex=gauchex-1;
        
    }
    else if(tableau[gauchey][gauchex]!=unecouleur){
        
        console.log(compteur)
        break
    }
    if (compteur==4){
        Win(unecouleur);
        return true
    }
}

while(droitex<=6 && droitey<=5){
    if(tableau[droitey][droitex]==unecouleur){
        compteur=compteur+1;
        droitey=droitey+1;
        droitex=droitex+1;
    }
    else if(tableau[droitey][droitex]!=unecouleur){
        break
    }
    if (compteur==4){
        Win(unecouleur);
        return true
    }
}

/*verification sur la diagonale bas droit haut gauche*/
compteur=1;
gauchex=x-1;
gauchey=y+1;

droitex=x+1;
droitey=y-1;

while(droitex<=6 && droitey>=0){
    if(tableau[droitey][droitex]==unecouleur){
        compteur=compteur+1;
        droitey=droitey-1;
        droitex=droitex+1;
    }
    else if(tableau[droitey][droitex]!=unecouleur){
        break
    }
    if (compteur==4){
        Win(unecouleur);
        return true
    }
}


while(gauchex>=0 && gauchey<=5){
    if(tableau[gauchey][gauchex]==unecouleur){
        compteur=compteur+1;
        gauchey=gauchey+1;
        gauchex=gauchex-1;
        
    }
    else if(tableau[gauchey][gauchex]!=unecouleur){
        
        console.log(compteur)
        break
    }
    if (compteur==4){
        Win(unecouleur);
        return true
    }
}






}

function Retour(x,y,monid,macouleur){
    tableau[y][x]="white";
    document.getElementById(monid).style.backgroundColor = "white";
    if (macouleur=="red"){
        turn=0;
        document.getElementById("Jyellow").classList.add("caché");
        document.getElementById("Jred").classList.remove("caché");
    }
    else if (macouleur=="yellow"){
        turn=1;
        document.getElementById("Jred").classList.add("caché");
        document.getElementById("Jyellow").classList.remove("caché");
    }
}

function verif(turn){
    if (turn == 0){
        document.getElementById("Jred").classList.add("caché");
        document.getElementById("Jyellow").classList.remove("caché");
    }
    else if (turn==1) {
        document.getElementById("Jyellow").classList.add("caché");
        document.getElementById("Jred").classList.remove("caché");

    }
}


function Reset(){
    turn=0;
    tableau=[
        ["white","white","white","white","white","white","white"],
        ["white","white","white","white","white","white","white"],
        ["white","white","white","white","white","white","white"],
        ["white","white","white","white","white","white","white"],
        ["white","white","white","white","white","white","white"],
        ["white","white","white","white","white","white","white"]
    ];

    for(var r = 1; r <=6; r++){
        console.log("columnuncase"+r);
        document.getElementById("columnuncase"+r).style.backgroundColor = "white";
    }

    for(var r = 1; r <=6; r++){
        document.getElementById("columndeuxcase"+r).style.backgroundColor = "white";
    }

    for(var r = 1; r <=6; r++){
        document.getElementById("columntroiscase"+r).style.backgroundColor = "white";
    }


    for(var r = 1; r <=6; r++){
        document.getElementById("columnquatrecase"+r).style.backgroundColor = "white";
    }


    for(var r = 1; r <=6; r++){
        document.getElementById("columncinqcase"+r).style.backgroundColor = "white";
    }


    for(var r = 1; r <=6; r++){
        document.getElementById("columnsixcase"+r).style.backgroundColor = "white";
    }


    for(var r = 1; r <=6; r++){
        document.getElementById("columnseptcase"+r).style.backgroundColor = "white";
    }
    document.getElementById("Wyellow").classList.add("caché");
    document.getElementById("Wred").classList.add("caché");
    document.getElementById("Jred").classList.remove("caché");
    document.getElementById("b_retour").addEventListener="onclick";
    jeuencour=true;
}


function Win(color){

    if(color=="red"){
        document.getElementById("Jyellow").classList.add("caché");
        document.getElementById("Jred").classList.add("caché");
        document.getElementById("Wred").classList.remove("caché");
        document.getElementById("b_retour").removeEventListener="onclick";
        jeuencour=false;
                
    }

    if(color=="yellow"){
        document.getElementById("Jyellow").classList.add("caché");
        document.getElementById("Jred").classList.add("caché");
        document.getElementById("Wyellow").classList.remove("caché");
        document.getElementById("b_retour").removeEventListener="onclick";
        jeuencour=false;
    }

}