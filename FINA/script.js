const hamburder = document.querySelector('.hamburger');
const toggleMenu = document.querySelector('.side-nav');
const closeBtn = document.querySelector('.close-btn')

hamburder.addEventListener('click', (e) =>{
    toggleMenu.classList.add('active')
})

closeBtn.addEventListener('click', (e) =>{
    toggleMenu.classList.remove('active')
})


