const setup = () => {

    let button = document.getElementById("action")
    button.addEventListener("click", instappen)

}

let personen = document.getElementById("passagiers");
let passagiers = personen.value();


const instappen = () => {
    for (let i = 0; i<passagiers.length; i++){
        let passagier = passagiers.split(',');
        let passagiers[] += passagier;

    }

}

window.addEventListener("load", setup);