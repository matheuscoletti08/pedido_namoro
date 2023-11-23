function sim() {
    alert("Você aceitou namorar comigo! :)");
    // redireciona para um URL após clicar no SIM
    location.href = "https://open.spotify.com/track/6qL5UWxRSQYml9O99ozoLv?si=64acf61bf61a4d60";
}

function desvia(btn) {
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
