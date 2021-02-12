                  
                  
                  // Selection des couleurs  de selection de 1 à 4
preDef ={
    0 : "blue",
    1 : "red",
    2 : "green",
    3 : "yellow" 
}

remplissage=["","","",""];
aDeviner=["", "", "", ""];
console.log(remplissage);



couleur_case1 = function(Choix_couleur1){
    let case_1 = Choix_couleur1.case1.value;
    remplissage[0] = case_1;
    console.log(remplissage);
    return remplissage;
}

couleur_case2 = function(Choix_couleur2){
    let case_2 = Choix_couleur2.case2.value;
    remplissage[1] = case_2;
    console.log(remplissage);
    return case_2;
}

couleur_case3 = function(Choix_couleur3){
    let case_3 = Choix_couleur3.case3.value;
    remplissage[2] = case_3;
    console.log(remplissage);
    return case_3;
}

couleur_case4 = function(Choix_couleur4){
    let case_4 = Choix_couleur4.case4.value;
    remplissage[3] = case_4;
    console.log(remplissage);
    return case_4;
}
                    // fin des selections couleurs 



                    //fonction de remplissage des cases

let remplissage_ligne = function(){ 

    if(remplissage[0] != "" && remplissage[1] != "" && remplissage[2] != "" && remplissage[3] != ""){
        let exact = 0;
        for(i=0; i< remplissage.length; i++){
            let modif_case = document.querySelector("#tableau  .C");
            console.log(modif_case);
            modif_case.className = remplissage[i];
            if(remplissage[i] == aDeviner[i]){
                exact ++;
            }

            
        }
        let final = document.querySelector("#tableau .RD");
        final.insertAdjacentHTML("beforeend", "Emplacements exacts : " + exact);
        final.className = "RD1";

        console.log(exact);
        

    }else{
        alert("Il manque des couleurs !");
    }
    return remplissage;
}






