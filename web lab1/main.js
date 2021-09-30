const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('header__nav')[0]
const headerButtons = document.getElementsByClassName('buttons')[0]
const header = document.getElementsByClassName('header')[0]
const guideParagraph = document.getElementsByClassName('guide__paragraph')[0]
const guideButton = document.getElementsByClassName('guide__button')[0]
const headerNavLink = document.getElementsByClassName('header__nav-link')[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    headerButtons.classList.toggle('active')
    header.classList.toggle('active')
    guideParagraph.classList.toggle('active')
    guideButton.classList.toggle('active')
    headerNavLink.classList.toggle('active')
})