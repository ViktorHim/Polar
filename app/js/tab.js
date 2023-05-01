window.addEventListener('DOMContentLoaded', () => {
	const tabsParent = document.querySelector('.dishes'),
	tabs = document.querySelectorAll('.dishes__item'),
	tabsContent = document.querySelectorAll('.product_tab');

	console.log(tabs.length);
	function hideContent()
	{
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(tab => {
			tab.classList.remove('dishes__item_active');
		});
	}

	function showContent(index = 0) {
		tabsContent[index].classList.add('show', 'fade');
		tabsContent[index].classList.remove('hide');
		tabs[index].classList.add('dishes__item_active');
	}

	hideContent();
	showContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;
		event.preventDefault();
		if(target && target.classList.contains('dishes__item')) {
			console.log('click');
			tabs.forEach((tab, index) => {
				if(target == tab) {
					hideContent();
					showContent(index);
				}
			});
		}
	});
});