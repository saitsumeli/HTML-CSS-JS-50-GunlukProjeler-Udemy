const open = document.querySelector('#open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


open.addEventListener('click',()=>{
    container.classList.add('show_nav')
    console.log('AJSKDHDJ')
})

close.addEventListener('click',()=>{
    container.classList.remove('show_nav')
})