const setup = () => {
}
window.addEventListener("load", setup);

family = ['joske','opke', 'nogle','werke', 'andy'];
console.log(family.length);
console.log(family[0], family[2],family[4]);

function voegNaamToe(){
    family.push(prompt());
}
voegNaamToe();
console.log(family);
console.log(family.join(', '));
/**
Maak een array met namen van familieleden aan. Zorg dat er minimaal vijf zijn. Voer daarmee volgende
opdrachten uit:
    ‐ schrijf naar de console hoeveel elementen de array bevat
‐ schrijf het eerste, derde en vijfde element uit de array naar de console
‐ Vraag met prompt() een extra naam op en voeg deze toe aan de Array. Probeer dit via een zelf
geschreven functie VoegNaamToe. Maak gebruik van pass‐by‐reference.  Schrijf vervolgens het
resultaat naar de console.
‐ Converteer de array naar een string en toon deze op de console.µ
 **/