const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let string1 = "honger";
    let string2 = "frieten";
    let string3 = "honger"
    console.log(string1==string2);
    console.log(string1===string2);
    console.log(string1 == string3);
    console.log(string1 === string3);
    string1.localeCompare(string2);
    string1.localeCompare(string3);
    console.log("frietn" +"--"+ "frieten".slice(2,6))

}
window.addEventListener("load", setup);