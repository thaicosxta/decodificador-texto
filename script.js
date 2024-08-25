function criptografarTexto() {
    const texto = document.getElementById('input-text').value.toLowerCase();
    if (texto !== '') {
        const chaves = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
        const textoCriptografado = texto.split('').map(letra => chaves[letra] || letra).join('');

        exibirResultado(textoCriptografado);
    }
}

function descriptografarTexto() {
    const texto = document.getElementById('input-text').value.toLowerCase();
    if (texto !== '') {
        const chaves = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
        let textoDescriptografado = texto;

        for (const chave in chaves) {
            textoDescriptografado = textoDescriptografado.replaceAll(chave, chaves[chave]);
        }

        exibirResultado(textoDescriptografado);
    }
}

function exibirResultado(texto) {
    const outputText = document.getElementById('output-text');
    const copyButton = document.getElementById('copy-button');
    
    outputText.textContent = texto;
    copyButton.style.display = 'inline-block';

    copyButton.onclick = () => {
        navigator.clipboard.writeText(texto);
        alert('Elvis copiou o seu texto!');
    };
}

