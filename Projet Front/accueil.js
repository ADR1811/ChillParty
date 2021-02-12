function defilement(){ 

    document.getElementById("mainsubject").classList.remove("back");
    document.getElementById("gameselection").classList.remove("back2");


    document.getElementById("mainsubject").classList.add("defil");
    document.getElementById("gameselection").classList.add("defil2");
    
    document.getElementById("suivant").classList.add("none");
    document.getElementById("retour").classList.remove("none");

    
    
    

}


function retour(){
    

    document.getElementById("mainsubject").classList.add("back");
    document.getElementById("gameselection").classList.add("back2");

    document.getElementById("mainsubject").classList.remove("defil");
    document.getElementById("gameselection").classList.remove("defil2");
    
    document.getElementById("retour").classList.add("none");
    document.getElementById("suivant").classList.remove("none");
    




}


function big(x) {
    document.getElementById(x).style.transform="scale(1.2)";
}
  
function normal(x) {
    document.getElementById(x).style.transform="scale(1)";
}