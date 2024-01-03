const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let resultado = 0;
    if (text.length === 0) {
      return resultado;
    }

    const palabras = text.trim();
    const arrPalabras = palabras.split(" ");
    for (let i = 0; i < arrPalabras.length; i++) {
      if (arrPalabras[i] !== '') {
        resultado++;
      }
    }
    return resultado;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const caracteres = text;
    return caracteres.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const caractSinEspaciosIyF = text.trim();
    //const caracSinEspaciosySignos = caractSinEspaciosIyF.replace(/^\w\s/g, '');
    // eslint-disable-next-line no-useless-escape
    const caracSinEspaciosySignos = caractSinEspaciosIyF.replace(/[ \.,;'\-\(\)\[\]{}!¡¿\?\:]/g, '');
    const caracExcEspySig = caracSinEspaciosySignos.length;
    return caracExcEspySig;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    let resultado = 0;
    let longitudMedia = 0;
    let sumaLongitudes = 0;

    if (text.length === 0) {
      return resultado;
    }

    const palabras = text.trim();
    const arrPalabras = palabras.split(" ");
    for (let i = 0; i < arrPalabras.length; i++) {
      sumaLongitudes += arrPalabras[i].length; // Sumar la longitud de cada palabra
    }

    for (let i = 0; i < arrPalabras.length; i++) {
      if (arrPalabras[i] !== '') {
        resultado++;
      }
    }
    longitudMedia = sumaLongitudes / resultado;
    const longitudMediaConDosDecimales = parseFloat(longitudMedia.toFixed(2));
    return longitudMediaConDosDecimales;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // const contadorNumeros = text;
    // const rContNumer = contadorNumeros.trim().replace(/\D/g, "");
    // return rContNumer.length;
    const numerosEncontrados = text.match(/\b\d+(?:[.,]\d+)?\b/g)
    if(!numerosEncontrados){
      return 0;
    }
    let totalNumeros = 0;
    for(let i = 0; i < numerosEncontrados.length; i++){
      totalNumeros++
    }
    return totalNumeros;

  },
  getNumberSum: (text) => {
    // const palabras = text.split(' ')
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    // let sumaDigitos = 0;
    // for (let i = 0; i < palabras.length; i++) {
    // if (text[i] >= '0' && text[i] <= '9') {
    //   sumaDigitos += parseInt(text[i], 10);
    // }

    // match(/\b\d+(?:[.,]\d+)?\b/g)
    // if(Number(palabras[i])){
    //     sumaDigitos += parseFloat(palabras[i])
    //   }
    // }
    // return sumaDigitos;
    const numerosEncontrados = text.match(/\b\d+(?:[.,]\d+)?\b/g)
    if(!numerosEncontrados){
      return 0;
    }
    let sumaDigitos = 0;
    for(let i = 0; i < numerosEncontrados.length; i++){
      sumaDigitos += parseFloat(numerosEncontrados[i])
    }
    return sumaDigitos;
  },
};
export default analyzer;
