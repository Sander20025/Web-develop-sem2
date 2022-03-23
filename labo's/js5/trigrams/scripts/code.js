const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let woord = "onoonbaar";

    for(i = 0; i<woord.length; i++){
        let deeltje = woord.substring(i,i+3)
        if(deeltje.length == 3){
            console.log(deeltje);
        } else {
            console.log("einde woord")
            i = woord.length;
        }

    }
}
window.addEventListener("load", setup);