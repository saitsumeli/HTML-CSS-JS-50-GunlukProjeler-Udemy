const panels = document.querySelectorAll('.panel')

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeToActive()
        panel.classList.add('active')

    })
})

function removeToActive() {
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}