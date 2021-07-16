let colors = ['yellow', 'blue', 'red', 'orange'];

// let i = 0;

// while (colors[i]) {
//     console.log(colors[i]);
//     i++
// }


// let text = "";
// for (let u = 0; u < colors.length; u++) {
//     console.log(text += colors[u] + "\n" );
//   }


colors.forEach(element => console.log(element));



/*
1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag? 
While loop 4 regels
For loop 14 regels

2. Hoeveel regels neemt mijn forEach method in beslag?
forecht 4 regels

3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode 
vind je bijvoorbeeld makkelijker leesbaar? Waarom?
Een array method is korter geschreven en daardoor makkelijker en duidelijker lees- en begrijpbaar.


4. Kun je een array method gebruiken op een object? 

Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren? Ja


*/

const object = { a: 1, b: 2, c: 3, d: 4, e: 5 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

