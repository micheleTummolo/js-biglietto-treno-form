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
    name_value = document.getElementById('name').value;
    console.log (name_value);

    km_value = document.getElementById('km').value;
    console.log (km_value);

    age_value = document.getElementById('age').value;
    console.log (age_value);

    /* Price calculation */
    tot_prezzo_km = km_value * prezzo_km;
    console.log (tot_prezzo_km + " Prezzo totale (Senza calcolo dello sconto)")

    /* Discount calculation */
    if (age_value == "under18"){
        prezzo_finito = tot_prezzo_km * 0.8;
        console.log (prezzo_finito + " Prezzo con 20% di sconto");
    }
    else if (age_value == "over65"){
        prezzo_finito = tot_prezzo_km * 0.6;
        console.log (prezzo_finito + " Prezzo con 40% di sconto");
    }
    else {
        prezzo_finito = tot_prezzo_km;
        console.log (prezzo_finito + " Prezzo no sconto");
    }
    
    prezzo_arrotondato = prezzo_finito.toFixed(2);
});

reset.addEventListener ('click', function(){
    document.getElementById("my_form").reset();
})

/* document.getElementById ('tot_viaggio').innerHTML = ("Prezzo finito: ") + prezzo_arrotondato; */