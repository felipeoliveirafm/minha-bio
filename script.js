function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  // ****PARA ADICIONAR TROCA DE IMAGEM PARA O LIGHT MODE****

  // pegar a tag img
  // const img = document.querySelector("#profile img")

    // substituir a img
    // if(html.classList.contains('light')){
    // se tiver light mode, adicionar a imagem light
    //  img.setAttribute('src', './assets/avatar.png')
    // img.setAttribute('alt', "Descrição da foto")
    // } else {
    // se tiver dark mode, manter a imagem normal
    //   img.setAttribute('src', "./assets/meuAvatar.png")
    //   img.setAttribute('alt',"Foto de Breno Soares usando camisa social preta, barba, piercing na sobrancela esquerda, brinco preto na orelha esquerda e brinco com brilho na orela direita")
    // }

}
