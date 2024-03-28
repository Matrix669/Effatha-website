document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.nav')
	const navBtn = document.querySelector('.nav-info__logoBtn--btn')
	const mobileNav = document.querySelector('.nav-mobile-ul')
	const navItems = document.querySelectorAll('.nav-mobile-ul-li-link')
	const linkHoverMobileAboutus = document.querySelector('.link-hover--aboutus')
	const dropdownMenu = document.querySelector('.nav-mobile-ul-li__dropdown')
	const dropdownMenuLinks = document.querySelectorAll('.nav-mobile-ul-li__dropdown--li')

	const navItemsArr = Array.from(navItems)
	navItemsArr.splice(1, 1)

	const handleNav = () => {
		mobileNav.classList.toggle('nav--active')
		navItemsArr.forEach(link => {
			link.addEventListener('click', () => {
				mobileNav.classList.remove('nav--active')
			})
		})
		dropdownMenu.classList.remove('active--dropdown-menu')
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
	function addNavShadow() {
		if (scrollY >= 100) {
			nav.classList.add('nav-shadow')
		} else {
			nav.classList.remove('nav-shadow')
		}
	}

	navBtn.addEventListener('click', handleNav)
	linkHoverMobileAboutus.addEventListener('click', handleDropdownMenu)
	window.addEventListener('scroll', addNavShadow)
})
