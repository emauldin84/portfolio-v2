let showDarkMode
let styleLink = document.getElementById('styles')
let changeMode = document.getElementById('change-mode')

if (!localStorage.getItem('dark-mode')){
    console.log('there is not a dark-mode in local storage')
    showDarkMode = false
    localStorage.setItem('dark-mode', showDarkMode.toString())
} else {
    showDarkMode = JSON.parse(localStorage.getItem('dark-mode'))
    console.log(showDarkMode, localStorage.getItem('dark-mode'))
    showDarkMode ? styleLink.setAttribute('href', './styles/goDark.css') : styleLink.setAttribute('href', './styles/index.css')
    showDarkMode ? changeMode.innerHTML = '🌕' : changeMode.innerHTML = '🌑'
}

document.getElementById("change-mode").addEventListener('click', () => {
    showDarkMode = !showDarkMode
    localStorage.setItem('dark-mode', JSON.stringify(showDarkMode))
    showDarkMode ? styleLink.setAttribute('href', './styles/goDark.css') : styleLink.setAttribute('href', './styles/index.css')
    showDarkMode ? changeMode.innerHTML = '🌕' : changeMode.innerHTML = '🌑'
})
