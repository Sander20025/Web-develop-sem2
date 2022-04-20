const setup = () => {
let tekst = document.getElementsByTagName("p")

    let tekst1 = tekst[0].firstChild;
    let nieuwetekst = document.createTextNode("good job");
    tekst1.remove();
    tekst[0].appendChild(nieuwetekst);

}
window.addEventListener("load", setup);