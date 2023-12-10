const menuTlacitko = document.querySelector("#menu-tlacitko")
const priKliknuti = () => {
    const menuPolozky = document.querySelector("#menu-polozky")
    if (menuPolozky.classList.contains('show')){
    menuPolozky.classList.remove('show')
    const faBars = document.querySelector(".fa-bars")
    faBars.classList.remove('fa-bars')
    faBars.classList.toggle('fa-xmark')
    } else {
        menuPolozky.classList.toggle('show')
        const faXmark = document.querySelector(".fa-xmark")
        faXmark.classList.remove('fa-xmark')
        faXmark.classList.toggle('fa-bars')
    }
}
menuTlacitko.addEventListener('click', priKliknuti)