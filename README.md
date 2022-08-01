# Caça ao Tesouro

## 1. Caça ao tesouro foi baseado em cifra de César .

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

Neste projeto criei a minha primeira aplicação web do _bootcamp_. Nela o usuário
poderá cifrar e decifrar um texto indicando a chave de deslocamento (_offset_).

Essa aplicação web é direcionada a adultos e crianças para criar um momento de lazer(brincadeira) ou para cifrar e decifrar textos de forma segura para que nenhum outro usuario tenha acesso do conteudo escrito.
Proporciona momentos de interação entre usuarios decifrando mensagens ou cifrando mensagens usando uma determinado numero de deslocamento.
## 3.Processo e decisões do desenho.
Fiz um esboço no caderno para entender as posições do input, span e botão.
 Criei apenas o input de texto e o span,depois fiz aparecer o texto digitado ,então coloquei o input number pra ter as posições offset e percebi que precisava de um botão para limpar o texto digitado pelo usuario .Apos isso parti para parte logica de cifrar e decifrar, usando uma função depois TypeError e o laço for .






