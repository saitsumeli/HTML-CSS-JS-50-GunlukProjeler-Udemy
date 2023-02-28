const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll' , checkBoxes)

checkBoxes() // Eğer kaydırma olmadan bir şey gözüksün istemiyorsanız kaldırabilirsiniz

function checkBoxes() {

const triggerBottom =  window.innerHeight / 5 * 4

boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top // Kutunun bir önceki kutudan daha fazl yer kaplayıp kaplamadığına bakar top yerine left deseydik soldan oranına bakıcaktı..
    
    if(boxTop < triggerBottom) {
        box.classList.add('show')
    } else {
        box.classList.remove('show')
    }
})

}