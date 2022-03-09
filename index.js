function calcular () {
    var input = document.getElementsByClassName("textInput")[0].value
    var charCount = document.getElementsByClassName("characterCount")[0]
    var wordCount = input.length
    charCount.innerHTML = wordCount
}