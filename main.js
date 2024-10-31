const tulos = document.getElementById('tulos');
const lampo = document.getElementById('hakukentta').value;
const muunnostyyppi = document.getElementById('muunnostyyppi').value;

function muunna(event){

    event.preventdefault();

    if (lampo = ''){
        tulosta('Virhe: anna lämpötila', true);
        return;
    }

    const lampoarvo = parseFloat(lampo)
    if (isNaN(lampoarvo) = false){
        tulosta('Virhe: syöte ei ole numero', true);
        return;
    }


    
}
function tulosta(viesti, virhe=false){
    viesti.document.getElementById(tulos)
    
}