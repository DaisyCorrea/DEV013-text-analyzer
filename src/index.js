import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const btnLimpiar = document.getElementById('reset-button');
const ingresarTexto = document.querySelector("textarea");
const rPalabras = document.querySelector("li[data-testid= 'word-count']");
const rCaracteres = document.querySelector("li[data-testid= 'character-count']");
const rCaracteresSinEspacios = document.querySelector("li[data-testid= 'character-no-spaces-count']");
const rNumeros = document.querySelector("li[data-testid= 'number-count']");
const sumaTotal = document.querySelector("li[data-testid= 'number-sum']");
const longMedia = document.querySelector("li[data-testid= 'word-length-average']");
const rCaracteresP = rCaracteres.innerHTML;
const rPalabrasP = rPalabras.innerHTML;
const rCaracteresSinEspaciosP = rCaracteresSinEspacios.innerHTML;
const rNumerosP = rNumeros.innerHTML;
const sumaTotalP = sumaTotal.innerHTML;
const longMediaP = longMedia.innerHTML;

ingresarTexto.addEventListener('input', verResultados)
btnLimpiar.addEventListener('click', limpiartodo)

function limpiartodo() {
  ingresarTexto.value = "";
  rPalabras.innerHTML = "Recuento de Palabras: 0"
  document.querySelector('li[data-testid="character-count"]').textContent = "Recuento de Caracteres: 0"
  document.querySelector('li[data-testid="character-no-spaces-count"]').innerHTML = "Recuento Caracteres Sin Especios y Puntuación: 0"
  rNumeros.textContent = "Recuento de Números: 0"
  sumaTotal.innerHTML = "Suma Total: 0"
  document.querySelector('li[data-testid="word-length-average"]').innerHTML = "Longitud Media de Palabras: 0"
}

function verResultados(valor) {
  rCaracteres.textContent = rCaracteresP + analyzer.getCharacterCount(valor.target.value);
  rPalabras.innerHTML = rPalabrasP + analyzer.getWordCount(valor.target.value);
  rCaracteresSinEspacios.innerHTML = rCaracteresSinEspaciosP + analyzer.getCharacterCountExcludingSpaces(valor.target.value);
  rNumeros.innerHTML = rNumerosP + analyzer.getNumberCount(valor.target.value);
  sumaTotal.innerHTML = sumaTotalP + analyzer.getNumberSum(valor.target.value);
  longMedia.innerHTML = longMediaP + analyzer.getAverageWordLength(valor.target.value);
}

