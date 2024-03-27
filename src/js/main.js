document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.nav')
	const navBtn = document.querySelector('.nav-info__logoBtn--btn')
	const mobileNav = document.querySelector('.nav-mobile-ul')
	const navItems = document.querySelectorAll('.nav-mobile-ul-li-link')
	const linkHoverMobileAboutus = document.querySelector('.link-hover--aboutus')
	const dropdownMenu = document.querySelector('.nav-mobile-ul-li__dropdown')
	const dropdownMenuLinks = document.querySelectorAll('.nav-mobile-ul-li__dropdown--li')
	const formSubmitBtn = document.querySelector('.form-submit-btn')
	const formSubmitMessage = document.querySelector('.contact__container__form__agreement--message')
	const emailInput = document.querySelector('#email')
	const emailLabel = document.querySelector('#label-email')
	const nameInput = document.querySelector('#name')
	const messageTextarea = document.querySelector('#message')
	const checkbox = document.querySelector('input[type="checkbox"]')
	const formBoxPrivacyPolicy = document.querySelector('.contact__container__form__agreement--box')

	const inputArr = [emailInput, nameInput, messageTextarea]

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

	// walidacja formularza

	function showError(input, msg) {
		const formBox = input.parentElement
		const errorMsg = formBox.querySelector('.error-info')

		formBox.classList.add('error')
		errorMsg.textContent = msg
	}
	function clearError(input) {
		const formBox = input.parentElement
		formBox.classList.remove('error')
	}
	function checkInput(input) {
		input.forEach(el => (el.value.trim() === '' ? showError(el, `To pole nie może być puste! `) : clearError(el)))
		input.forEach(el =>
			el.addEventListener('input', () => {
				el.value !== '' ? clearError(el) : ''
			})
		)
		validEmail(input[0])
	}

	function checkBtnPrivacyPolicy(checkbox) {
		const errorInfoPrivacyPolicy = document.querySelector('.error-info-privacy-policy')
		if (!checkbox.checked) {
			formBoxPrivacyPolicy.classList.add('error')
			errorInfoPrivacyPolicy.textContent = 'Zaznacz zgodę'
		} else {
			formBoxPrivacyPolicy.classList.remove('error')
		}
	}

	function validEmail(email) {
		const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

		if (emailRegex.test(email.value.trim())) {
			clearError(inputArr[0])
		} else {
			showError(email, `Nieprawidłowy adres email`)
		}
	}
	function checkErrors() {
		const allInputs = document.querySelectorAll('.contact-error-box')
		let errorCount = 0

		allInputs.forEach(input => {
			if (input.classList.contains('error')) {
				errorCount++
			}
		})
        if(errorCount === 0) {
            formSubmitMessage.classList.add('form-message-visible')
        }
	}
	navBtn.addEventListener('click', handleNav)
	linkHoverMobileAboutus.addEventListener('click', handleDropdownMenu)
	window.addEventListener('scroll', addNavShadow)
	formSubmitBtn.addEventListener('click', e => {
		e.preventDefault()
		checkInput(inputArr)
		checkBtnPrivacyPolicy(checkbox)
        checkErrors()
	})
	emailInput.addEventListener('input', () => {
		if (emailInput.value !== '') {
			emailLabel.classList.add('active-email-label')
		} else {
			emailLabel.classList.remove('active-email-label')
		}
	})
})
