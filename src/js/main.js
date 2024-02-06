document.addEventListener('DOMContentLoaded', function () {
    const navBtn = document.querySelector('.nav-info__logoBtn--btn')
    const mobileNav = document.querySelector('.nav-mobile-ul')
    const navItems = document.querySelectorAll('.nav-mobile-ul-li')

    const handleNav = () => {
        mobileNav.classList.toggle('nav--active')
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('nav--active')
            })
        })
    }

    navBtn.addEventListener('click', handleNav)
})