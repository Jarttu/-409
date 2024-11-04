

function celsiusF(){
    const lampoinput = document.getElementById('hakukentta').value;
    const lampotila = parseFloat(lampoinput)
    if (lampoinput === '' || isNaN(lampotila)){
        tulosta('Syötettä ei ole tai se ei ole numero!', true);
        return;
    }

    if (lampotila < -273.15){
        tulosta('lämpötila on pienempi kuin absoluuttinen nollpiste. (-273.15 °C)', true);
        return;
    }
    
    const muunnettu = lampotila * 1.8 + 32

    tulosta(`${lampotila} °C = ${muunnettu.toFixed(2)}  °F`, false)
}

function fahrenheitC(){
    const lampoinput = document.getElementById('hakukentta').value;
    const lampotila = parseFloat(lampoinput)
    if (lampoinput === '' || isNaN(lampotila)){
        tulosta('Syötettä ei ole tai se ei ole numero!', true);
        return;
    }

    

    if (lampotila < -459.67){
        tulosta('lämpötila on pienempi kuin absoluuttinen nollpiste. (-459,67 °F)', true);
        return;

    }

    const muunnettu = (lampotila - 32) / 1.8

    tulosta(`${lampotila} °F = ${muunnettu.toFixed(2)} °C`, false)
}
function tulosta(viesti, virhe=false){
    const tulostus = document.getElementById('tulos')
    tulostus.textContent = viesti;
    tulostus.style.color = virhe ? 'red' : 'black'
}