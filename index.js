var palavra = window.prompt(`Qual palavra você gostaria de saber o nome?`)
window.alert(`Sua palavra é ${palavra}, e o número de letras é ${palavra.length}`)

if (palavra.length > 10) {
    window.alert(`Sua palavra é muito grande`)
} else {
    window.alert(`Sua palavra está de acordo`)
}