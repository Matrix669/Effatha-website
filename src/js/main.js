document.addEventListener('DOMContentLoaded', function () {
    const navBtn = document.querySelector('.nav-info__logoBtn--btn')
    const mobileNav = document.querySelector('.nav-mobile-ul')
    const navItems = document.querySelectorAll('.nav-mobile-ul-li')
    const linkHoverMobileAboutus = document.querySelector('.link-hover--aboutus')
    const dropdownMenu = document.querySelector('.nav-mobile-ul-li__dropdown')
    const dropdownMenuLinks = document.querySelectorAll('.nav-mobile-ul-li__dropdown--li')
    
    const navItemsArr = Array.from(navItems)
    navItemsArr.splice(1,1)
    
    const handleNav = () => {
        mobileNav.classList.toggle('nav--active')
        navItemsArr.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('nav--active')
            })
        })
        dropdownMenu.classList.remove('nav--active')
    }

    function handleDropdownMenu() {
        dropdownMenu.classList.toggle('active--dropdown-menu')
        dropdownMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                dropdownMenu.classList.remove('active--dropdown-menu')
                mobileNav.classList.remove('nav--active')
            })
        })
    }

    navBtn.addEventListener('click', handleNav)
    linkHoverMobileAboutus.addEventListener('click', handleDropdownMenu)
})