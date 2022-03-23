const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.getElementById("action");
    let passagiers = document.getElementById("passagiers").textContent.toLowerCase();
    let aantal = passagiers.length;
    button.addEventListener('action');

    let optel = 0;
    while(aantal < passagiers.length){
        let zitplaatsen = passagiers[optel] +"--"+ passagiers[optel++];
        passagiers.split(',');
        optel += 2;
        console.log(zitplaatsen);
    }
    //if(passagiers %2 === 0 && ){
        //console.log("nieuw karretje")
   // }

}

window.addEventListener("load", setup);
button.addEventListener("click", setup);

