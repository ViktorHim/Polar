const buttonNode = document.querySelector('.menu__btn');
const menuListNode = document.querySelector('.menu__list');
const bodyNode = document.querySelector('body');


function switchMenu(){
	if(menuListNode.classList.contains('menu__list_active')){
		menuListNode.classList.remove('menu__list_active');
		buttonNode.classList.remove('menu__btn_active');
		bodyNode.classList.remove('no-scroll');
	} else {
		menuListNode.classList.add('menu__list_active')
		bodyNode.classList.add('no-scroll');
		buttonNode.classList.add('menu__btn_active');
	}
}

buttonNode.addEventListener('click', switchMenu);