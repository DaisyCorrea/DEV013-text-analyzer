# Analizador de texto

## Índice

* [1. Consideraciones generales](#1-consideraciones-generales)
* [2. Preámbulo](#2-preámbulo)
* [3. Resumen del proyecto](#3-resumen-del-proyecto)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Decisiones de Diseño](#5-Decisiones de Diseño)

***

## 1. Consideraciones generales

* Este proyecto fue elaborado por Daisy Correa **proyecto individual**.
* El tiempo que se ocupó para completar este proyecto fue de 3 Sprints.
* El proyecto fue una gran oportunada para lograr un crecimiento intelectual y emocional.

## 2. Preámbulo

![Una lupa sobre texto de libro](https://github.com/Laboratoria/curriculum/assets/92090/2b45f653-69a5-4282-a65c-d34125c36113)

_Credito: Foto de [ethan](https://unsplash.com/fr/@andallthings?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
_en [Unsplash](https://unsplash.com/es/fotos/72NpWZJOskU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

Un analizador de texto es una aplicación para extraer información útil de un
texto utilizando diversas técnicas, como el procesamiento del lenguaje
natural (NLP), el aprendizaje automático (ML) y el análisis estadístico.
Estas aplicaciones pueden proporcionar una variedad de métricas que brindan
información básica sobre la longitud y la estructura del texto como por
ejemplo, el conteo de palabras, el conteo de caracteres, el conteo de
oraciones y el conteo de párrafos. Otras métricas incluyen el análisis
de sentimientos, que utiliza técnicas de NLP para determinar el tono
general positivo, negativo o neutral del texto, y el análisis de
legibilidad, que utiliza algoritmos para evaluar la complejidad y la
legibilidad del texto.

En general, las aplicaciones de análisis de texto brindan información
valiosa y métricas sobre los textos que pueden ayudar a las usuarias a
tomar decisiones informadas y sacar conclusiones significativas.
Mediante el uso de estas herramientas de análisis, las usuarias pueden
obtener una comprensión más profunda de los textos.

## 3. Resumen del proyecto

El presente proyecto es una aplicación web que sirve para que la usuaria
pueda analizar un texto que ella ingresa desde el navegador donde se 
visualizan una serie de indicadores y métricas específicas sobre caracteres, palabras, cantidad de números, etc. Para la creación del proyecto se ha utilizado HTML, CSS y JavaScript.

## 4. Funcionalidades

El listado de funcionalidades es el siguiente:

1. La aplicación permite a la usuaria ingresar un texto escribiéndolo en un cuadro de texto.

2. La aplicación calcula las siguientes métricas y actualiza el resultado en tiempo real a medida que la usuaria escribe su texto:

    - **Recuento de palabras**: La aplicación cuenta el número de palabras en el texto de entrada y muestra este recuento a la usuaria en tiempo real.
    - **Recuento de caracteres**: La aplicación cuenta el número de caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación, y muestra este recuento a la usuaria en tiempo real.
    - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    La aplicación cuenta el número de caracteres en el texto de entrada excluyendo espacios y signos de puntuación, y muestra este recuento a la usuaria en tiempo real.
    - **Recuento de números**: La aplicación cuenta cúantos números hay en
    el texto de entrada y y muestra este recuento a la usuaria en tiempo real.
    - **Suma total de números**: La aplicación suma todos los números que
    hay en el texto de entrada y muestra esta suma a la usuaria en tiempo real.
    - **Longitud media de las palabras**: La aplicación calcula la longitud media de las palabras en el texto de entrada y muestra este calculo a la usuaria en tiempo real.

3. La aplicación debe permitir limpiar el contenido de la caja de texto haciendo clic en un botón y reinicia a todos los contadores y sumadores.

![Text analyzer demo](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650556-988dcd6f-bc46-473b-894c-888a66c9fe2d.gif "Text analyzer demo")

## 5. Decisiones de Diseño
### Centrado en la usuaria

* ** Se diseñó y desarrolló el producto o servicio poniendo a las usuarias 
en el centro**

### Diseño de producto
 - [ ] Se creó un prototipo de baja fidelidad para la UI (interfaz gŕafica), siguiendo los principios básicos del diseño visual:

 * ** Se utilizó un fondo con diseño en tono oscuro y con opacacidad y textos y área de escritura en tono blanco para que sea todo legible.
 
 * ** No se utilizó imágenes o no colores exuberantes o exageradamente vistosos para que no distorcione el objetivo del proyecto.

 * ** Se le dió relevancia al ingreso del texto y sus funcionalidades.
 * ** Se mantuvo alineaciones por estética