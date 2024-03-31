document.addEventListener('DOMContentLoaded', function () {
	const customDropdownDefaultTitle = document.querySelector('.blog-post__container--title__sorting__box-dropdown span')
	const customDropdownBoxTitle = document.querySelectorAll('.custom-dropdown')
	const customDropdownBoxList = document.querySelector('.blog-post__container--title__sorting__box-dropdown--list')
	const customDropdownListItems = document.querySelectorAll(
		'.blog-post__container--title__sorting__box-dropdown--list li'
	)

	function handleDropdown() {
		customDropdownBoxList.classList.toggle('active-dropdown-list')
		customDropdownListItems.forEach(item => {
			item.addEventListener('click', () => {
				let selectedItem = item.innerText
				customDropdownDefaultTitle.innerText = selectedItem

				customDropdownBoxList.classList.remove('active-dropdown-list')
			})
		})
	}

	customDropdownBoxTitle.forEach(box => {
		box.addEventListener('click', () => {
			handleDropdown()
			document.addEventListener('click', e => {
				if (!box.contains(e.target) && e.target !== box) {
					customDropdownBoxList.classList.remove('active-dropdown-list')
				}
			})
		})
	})
})
