// Web 12. feladat:
// A csudijo.js fájlban hozzon létre olyan JavaScript kódot, ami a szervertől Ajax
// kéréssel lekérdezi, hogy melyik étel volt a legnépszerűbb az elmúltévben,
// és a válaszüzenetben kapott étel nevét betölti a legnepszerubb tagkijelölővel
// rendelkező  bekezdésbe!
// A megfelelő szerver oldali végpont az alábbi jellemzőkkel bír
//     - Kérés típusa: GET
//     - URL: /api/legnepszerubb
//     - Választípus: JSON
//     - Válasz adat: {etelNev}
// Amennyiben nem tudja elvégezni az adatlekérést a szerverről, 
// a „LECSÓ KOLBÁSZCSIPSSZEL” szöveget töltse be a HTML oldal betöltődését követően
// JavaScript kód segítségével a legnepszerubb tagkijelölővel rendelkező bekezdésbe.

function legnepszerubb() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(JSON.parse(this.responseText));
            document.getElementById("legnepszerubb").innerHTML = JSON.parse(this.responseText).etelNev;
        }
    }
    xhttp.open("GET", "/api/legnepszerubb");
    xhttp.send();
}

// Központi megoldás:
// window.onload = function() {
//     legnepszerubb();
// }

// Egyszerűbb megoldás:
legnepszerubb();
// Web 12. feladat vége