tableau=[
    ["white","white","white","white","white","white","white"],/*0-4*/  /*0-0*/
    ["white","white","white","red","white","white","white"], /*1-3*/  /*1-1*/
    ["white","white","red","white","white","white","white"], /*2-2*/ /*2-2*/
    ["white","red","white","white","white","white","white"],/*3-1*/ /*3-3*/
    ["red","white","white","white","white","white","white"],
    ["white","white","white","white","white","white","white"]
];
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
            alert(unecouleur+" win")
            return true
        }
        
    }
    /* VERIFICATION SUR UNE LIGNE*/
    compteur=1;
    let gauche=x-1;
    let droite=x+1;
    console.log(y);
    while (gauche>=0){
        if (tableau[y][gauche]==unecouleur){
            compteur=compteur+1;
            gauche=gauche-1;
        }
        else if(tableau[y][gauche]!=unecouleur){
            break
        }
        if(compteur==4){
            alert(unecouleur+" win")
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
            alert(unecouleur+" win")
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
            break
        }
        if (compteur==4){
            alert(unecouleur+" win")
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
            alert(unecouleur+" win")
            return true
        }
    }

    /*verification sur la diagonale bas droit haut gauche*/
    compteur=1;
    gauchex=x-1;
    gauchey=y+1;

    droitex=x+1;
    droitey=y-1;


    while(gauchex<=6 && gauchey>=0){
        if(tableau[gauchey][gauchex]==unecouleur){
            compteur=compteur+1;
            gauchey=gauchey-1;
            gauchex=gauchex+1;
        }
        else if(tableau[gauchey][gauchex]!=unecouleur){
            break
        }
        if (compteur==4){
            alert(unecouleur+" win")
            return true
        }
    }

    while(droitex>=0 && droitey>=5){
        if(tableau[droitey][droitex]==unecouleur){
            compteur=compteur+1;
            droitey=droitey+1;
            droitex=droitex-1;
        }
        else if(tableau[droitey][droitex]!=unecouleur){
            break
        }
        if (compteur==4){
            alert(unecouleur+" win")
            return true
        }
    }

    
}

WinOrNot(2,2,"red")