'use strict';
const textId = document.getElementById('textId');

textId.addEventListener('click', () => {
	textId.classList.toggle('click');
})

document.addEventListener('keyup', event => {
	if (event.code === 'Space') {
		textId.remove();
	} 
})