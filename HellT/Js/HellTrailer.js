let bot = document.querySelector('.botao1H')
bot.addEventListener('click', veri)
let foto = document.querySelector('.fotoH')
let botao = document.querySelector('.botaoH')
let botao1 = document.querySelector('.botao1H')
let video = document.querySelector('.videoH')
let caixa = document.querySelector('.caixaH')
let caixa1 = document.querySelector('.caixa1H')
let logo = document.querySelector('.logoH')

//Parte debaixo
let caixaB = document.querySelector('.caixaB')
let caixaB1 = document.querySelector('.caixaB1')
let fotoB = document.querySelector('.fotoB')
let logoB = document.querySelector('.logoB')
let logoB1 = document.querySelector('.logoB1')
let botaoB = document.querySelector('.botaoB')
let botaoB1 = document.querySelector('.botaoB1')
let videoB = document.querySelector('.videoB')
//

function veri() {

  foto.style.minHeight = '0px'
  foto.style.maxHeight = '0px'
  foto.style.position = 'absolute'
 
  botao.style.width = '0px'
  botao1.style.width = '0px'

  caixa1.style.minHeight = '400px'
  caixa1.style.maxHeight = '800px'

  
 
    video.innerHTML = '<iframe class="videoH" src="https://www.youtube.com/embed/ic9ZGjTqCs8?si=94ehohzBPmcEn-eW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
     
}


let botB = document.querySelector('.botaoB1')
botB.addEventListener('click', veriB)

function veriB() {
  fotoB.style.minHeight = '0px'
  fotoB.style.maxHeight = '0px'
  fotoB.style.position = 'absolute'

  botaoB.style.width = '0px'
  botaoB1.style.width = '0px'

  caixaB1.style.minHeight = '400px'
  caixaB1.style.maxHeight = '800px'

  videoB.innerHTML = '<iframe class="videoB" src="https://www.youtube.com/embed/3VYGOkMnGCE?si=gYLZPdxnkkQXnZWd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'  
}









let sc = document.querySelector('.setcimaH')
sc.addEventListener('click', scima)
let setcima = document.querySelector('.setcimaH')



function scima(){
   caixa.style.height =  '0vh'
   
   //Os 2 codigo abaixo são para dar uma animação ao quadrado da parte de cima na hora de desce ou subir.
   caixa1.style.minWidth = '130px'
   caixa1.style.maxWidth = '0px'
   //
   logo.style.height = '0px'
   botao1.style.height = '0px'
  //Esses 2 com inicio de 'set' são para não fica feio na hora da animação
   setcima.style.display = 'none'
   setbaixo.style.display = 'block'

//                                  BAIXO
caixaB.style.height = '100vh'
caixaB1.style.minHeight = '320px'
caixaB1.style.maxHeight = '800px'

fotoB.style.minHeight = '320px'
fotoB.style.maxHeight = '300px'

logoB.style.height = '15vh'


botaoB1.style.height = '90px'
//                                    FIM DO BAIXO

}


let des = document.querySelector('.Setbaixo')
des.addEventListener('click', sbaixo)
let setbaixo = document.querySelector('.Setbaixo')

function sbaixo() {
  //Esses 2 com inicio de 'set' são para não fica feio na hora da animação
  setcima.style.display = 'block'
  setbaixo.style.display = 'none'

  foto.style.height = '100%'
  caixa.style.height =  '100vh'
   //Os 2 codigo abaixo e para animação da 'caixa1' quando subir a tela
  caixa1.style.minWidth = '320px'
  caixa1.style.maxWidth = '500px'
  //
  caixa1.style.minHeight = '320px'
  caixa1.style.maxHeight = '800px'
  
  logo.style.height = '18vh'
  botao1.style.height = '86px'
  

 
//                                  BAIXO
caixaB.style.height = '0vh'
caixaB1.style.minHeight = '0px'
caixaB1.style.maxHeight = '0px'

fotoB.style.minHeight = '0px'
fotoB.style.maxHeight = '0px'

logoB.style.height = '0px'


botaoB1.style.height = '0px'


}

