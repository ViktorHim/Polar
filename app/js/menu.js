const buttonNode = document.querySelector('.menu__btn'),
menuListNode = document.querySelector('.menu__list');


function switchMenu(){
	menuListNode.classList.toggle('menu__list_active');
	buttonNode.classList.toggle('menu__btn_active');
	document.body.classList.toggle('no-scroll');
}

buttonNode.addEventListener('click', switchMenu);