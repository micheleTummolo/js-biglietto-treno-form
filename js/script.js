let name_value;
let km_value;
let age_value;
let tot_prezzo_km;
let prezzo_finito;
let prezzo_arrotondato;

const prezzo_km = 0.21;
console.log (prezzo_km);

const button = document.getElementById ('get_value');
const reset = document.getElementById ('reset')

button.addEventListener ('click', function(){
    
    /* Input value */

    /* Name */
    name_value = document.getElementById('name').value;
    console.log (name_value);

    /* Controllo form name */
    if (name_value == 0){
        alert ("Inserisci il nome del passeggero");
        name_value = "###### #######";
    }

    /* Km */
    km_value = document.getElementById('km').value;
    console.log (km_value);


    /* Age */
    age_value = document.getElementById('age').value;
    console.log (age_value);

    /* Price calculation */
    tot_prezzo_km = km_value * prezzo_km;
    console.log (tot_prezzo_km + " Prezzo totale (Senza calcolo dello sconto)")

    /* Discount calculation */
    if (age_value == "under18"){
        prezzo_finito = tot_prezzo_km * 0.8;
        console.log (prezzo_finito + " Prezzo con 20% di sconto");
        document.getElementById ('discount').innerHTML = "Scontato 20%";
    }
    else if (age_value == "over65"){
        prezzo_finito = tot_prezzo_km * 0.6;
        console.log (prezzo_finito + " Prezzo con 40% di sconto");
        document.getElementById ('discount').innerHTML = "Scontato 40%";
    }
    else {
        prezzo_finito = tot_prezzo_km;
        console.log (prezzo_finito + " Prezzo no sconto");
        document.getElementById ('discount').innerHTML = "Biglietto standard";
    }
    
    prezzo_arrotondato = prezzo_finito.toFixed(2);
    console.log (prezzo_arrotondato + " Prezzo arrotondato")

    function getRandomInt(max) {
        return Math.floor (Math.random() * max);
    }

    document.getElementById ('passenger_name').innerHTML = name_value;
    
    /* Contorllo form */
    if (km_value == 0){
        alert ("Inserisci i km da percorrere");
        document.getElementById ('price').innerHTML = "##.##";
        document.getElementById ('carriage_numb').innerHTML = "#";
        document.getElementById ('cp_numb').innerHTML = "#####";
        
    }
    else {
        document.getElementById ('carriage_numb').innerHTML = getRandomInt (10) + 1;
        document.getElementById ('cp_numb').innerHTML = getRandomInt (89999) + 10000;
        document.getElementById ('price').innerHTML = prezzo_arrotondato;
    }


});

reset.addEventListener ('click', function(){
    document.getElementById("form_name").reset();
    document.getElementById("form_km").reset();
    document.getElementById("form_age").reset(); 
})

