const esegui = document.getElementById('esegui')

esegui.addEventListener('click', function() {
    const prezzoKm = 0.21
    let result;
    const km = parseInt(document.getElementById('km').value);
    const eta = document.getElementById('eta').value;
    const prezzoBiglietto = document.getElementById('prezzoBiglietto');

    if (eta == 'minorenne'){
        result = (km * prezzoKm) - ((km * prezzoKm) * 0.2)
    }else if (eta == 'over65'){
        result = (km * prezzoKm) - ((km * prezzoKm) * 0.4)
    } else {
        result = km * prezzoKm
    }

    document.getElementById('prezzoBiglietto').innerHTML = result.toFixed(2) + '€'
    document.querySelector('.biglietto').classList.add('d-block');
});