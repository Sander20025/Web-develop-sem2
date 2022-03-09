const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let sliders = document.getElementsByClassName("slider");
    sliders[0].addEventListener("input", update)
    sliders[1].addEventListener("input", update)
    sliders[2].addEventListener("input", update)


}
const update = () =>{
    let sliderRED = document.getElementsByClassName("sliderred");
    let sliderGREEN= document.getElementsByClassName("slidergreen");
    let sliderBLUE = document.getElementsByClassName("sliderblue");

    let cijferRed = document.getElementsByClassName("redcijfer")
    let cijferGreen = document.getElementsByClassName("greencijfer")
    let cijferBlue = document.getElementsByClassName("bluecijfer")

    let valueRed = sliderRED[0].value;
    let valueGreen = sliderGREEN[0].value;
    let valueBLue = sliderBLUE[0].value;
    cijferRed[0].innerHTML = valueRed;
    cijferGreen[0].innerHTML = valueGreen;
    cijferBlue[0].innerHTML = valueBLue;


    let rood = document.getElementById("kleur rood").value
    let groen = document.getElementById("kleur groen").value
    let blauw = document.getElementById("kleur blauw").value
    let vierkant = document.getElementsByClassName("vierkant")

    vierkant[0].style.backgroundColor = "rgb("+ rood + "," + groen +","+ blauw + ")"

}
window.addEventListener("load", setup);
window.addEventListener("load", update);