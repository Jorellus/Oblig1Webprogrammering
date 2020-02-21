
const liste = [];

function kjop(){

//henter alle verdiene fra inputene
let innFornavn = document.getElementById("fornavn").value;
let innEtternavn = document.getElementById("etternavn").value;
let innAntall = document.getElementById("antall").value;
let innTlf = document.getElementById("tlf").value;
let innEpost = document.getElementById("epost").value;
let innFilm = document.getElementById("filmer").value;

let antall = parseInt(innAntall, 10);
let tlf = parseInt(innTlf, 10);

//henter hele film arrayet fra nedtrekkslisten for å kunne bruke .selectedIndex funksjonen senere
let filmIndex = document.getElementById("filmer");

//blanker alle feilmelding felt
document.getElementById("feilFornavn").innerHTML = "";
document.getElementById("feilEtternavn").innerHTML = "";
document.getElementById("feilTlf").innerHTML = "";
document.getElementById("feilEpost").innerHTML = "";
document.getElementById("feilAntall").innerHTML = "";
document.getElementById("feilFilm").innerHTML = "";


// sjekker at alle input felt har noe i seg
if(filmIndex.selectedIndex == 0){
        document.getElementById("feilFilm").innerHTML = "Må velge en film";
}   else if(innFornavn === ''){
    document.getElementById("feilFornavn").innerHTML = "Må skrive noe inn i fornavn";
}   else if(innEtternavn === ''){
    document.getElementById("feilEtternavn").innerHTML = "Må skrive noe inn i etternavn";
}   else if(isNaN(tlf)) {
    document.getElementById("feilTlf").innerHTML = "Må skrive noe inn i telefonnmr og det må være et tall";
}   else if(innEpost === '') {
    document.getElementById("feilEpost").innerHTML = "Må skrive noe inn i epost";
}   else if (isNaN(antall)){
        document.getElementById("feilAntall").innerHTML = "Må skrive noe inn i antall og det må være et tall";
}   else {


    let listeObjekt = {
        lFilm: "",
        lAntall: 0,
        lFornavn: "",
        lEtternavn: "",
        lTlf: 0,
        lEpost: ""
    };

    //putter verdier inn et listeobjekt som blir puttet inn et array
    listeObjekt.lFilm = innFilm;
    listeObjekt.lAntall = antall;
    listeObjekt.lTlf = tlf;
    listeObjekt.lFornavn = innFornavn;
    listeObjekt.lEtternavn = innEtternavn;
    listeObjekt.lEpost = innEpost;

    liste.push(listeObjekt);


    //blanker alle input felt
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("tlf").value = "";
    document.getElementById("epost").value = "";
    document.getElementById("antall").value = "";
    filmIndex.selectedIndex = 0;

    let ut = "";
    ut = "<table><tr>" + "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>";
    for(let l of liste){
        ut += "<tr>";
       ut += "<td>" + l.lFilm + "</td><td>" + l.lAntall + "</td><td>" + l.lFornavn + "</td><td>" +
           l.lEtternavn + "</td><td>" + l.lTlf + "</td><td>" + l.lEpost + "</td>";
        ut += "</tr>";
    }
    document.getElementById("utskrift").innerHTML = "";
    document.getElementById("utskrift").innerHTML = ut;

}

}

function slett(){
     document.getElementById("utskrift").innerHTML = "";
     liste.splice(0,liste.length);
}