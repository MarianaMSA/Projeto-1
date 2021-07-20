let elementoNome = document.querySelector('#nome')
let elementoSituacao = document.querySelector('#situacao')
let elementoImg = document.querySelector('#imagem')
let elementoBotao = document.querySelector('#alterar') 


elementoBotao.addEventListener('click', () => {
    
    if(elementoBotao.value == 'primeiro'){
        elementoImg.src = './assets/img/seriaa.png' 
        elementoNome.innerText = 'June - Offred' 
        elementoSituacao.innerText = 'June seria' 
        elementoBotao.value = 'segundo' 
    } else if(elementoBotao.value == 'segundo') { 
        elementoImg.src = './assets/img/chorandoo.png'  
        elementoNome.innerText = 'June triste' 
        elementoSituacao.innerText = 'Choro de June' 
        elementoBotao.value = 'terceiro' 
    } else if(elementoBotao.value == 'terceiro') { 
        elementoImg.src = './assets/img/sorrisoo.png'  
        elementoNome.innerText = 'June - Mamis' 
        elementoSituacao.innerText = 'Sorriso de June' 
        elementoBotao.value = 'quarto' 
    } else { 
        elementoImg.src = './assets/img/assustadaa.png' 
        elementoNome.innerText = 'Luke sumiu'
        elementoSituacao.innerText = 'Assustada'
        elementoBotao.value = 'primeiro' 
    }
})