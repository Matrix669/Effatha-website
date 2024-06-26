document.addEventListener('DOMContentLoaded', function() {
    const formSubmitBtn = document.querySelector('.form-submit-btn')
    const formSubmitMessage = document.querySelector('.contact__container__form__agreement--message')
    const emailInput = document.querySelector('#email')
	const emailLabel = document.querySelector('#label-email')
    const nameInput = document.querySelector('#name')
	const messageTextarea = document.querySelector('#message')
	const checkbox = document.querySelector('input[type="checkbox"]')
	const formBoxPrivacyPolicy = document.querySelector('.contact__container__form__agreement--box')
    const inputArr = [emailInput, nameInput, messageTextarea]

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
        if(errorCount === 0 && document.location.search === '?mail_status=sent') {
            formSubmitMessage.classList.add('form-message-visible--success')
			formSubmitMessage.textContent = 'Wiadomość została wysłana!'

			setTimeout(() => {
				formSubmitMessage.classList.remove('form-message-visible--success')
			}, 3000);
        }
		if (errorCount === 0 && document.location.search === '?mail_status=error') {
			formSubmitMessage.classList.add('form-message-visible--error')
			formSubmitMessage.textContent = 'Błąd z wysłaniem!'

			setTimeout(() => {
				formSubmitMessage.classList.remove('form-message-visible--error')
			}, 3000);
		}
	}


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