const tulos = document.getElementById('tulos');
const lampo = document.getElementById('hakukentta').value;
const muunnostyyppi = document.getElementById('muunnostyyppi').value;

function muunna(event){

    event.preventdefault();

    if (lampo === ''){
        tulosta('Anna lämpötila', true);
        return;
    }

    const lampoarvo = parseFloat(lampo)
    if (isNaN(lampoarvo)){
        tulosta('Syöte ei ole numero', true);
        return;
    }

    if ((muunnostyyppi === "CtoF" && lampoarvo >= -273.15) || (muunnostyyppi === "FtoC" && lampoarvo >= 459.67)){
        tulosta('lämpötila on pienempi kuin absoluuttinen nollpiste.', true);
        return;
    }
    
    const muunnettu = 


}

function tulosta(viesti, virhe=false){
    const tulostus = document.getElementById('tulos')
    tulostus.textContent = viesti;
    
}