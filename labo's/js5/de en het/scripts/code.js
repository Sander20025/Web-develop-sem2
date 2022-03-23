const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel".toLowerCase();
    for (let i = 0; i <= tekst.length; i++){
        let output = "";
        if(tekst.substring(i-1,i+3)==" de "){

                output += tekst.substring(i,i++);

        }
        else{
            output += tekst.substring(i,i+1);
        }

    console.log(output);
    }

}
window.addEventListener("load", setup);