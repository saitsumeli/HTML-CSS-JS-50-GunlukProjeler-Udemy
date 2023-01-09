// bu projede yapmamız gereken sey bir aktif clasımız olsun bu classı input ve butonumuz alacak input aktıf olduguna gozukecek inaktif oldugunda sadece buton gozukecek.

const search = document.querySelector('.search')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    search.classList.toggle('active')
    input.focus()
})