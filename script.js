'use strict';
const textId = document.getElementById('textId');

textId.addEventListener('click', () => {
	textId.classList.add('click');
})

document.addEventListener('keyup', event => {
	if (event.code === 'Space') {
		textId.remove();
	} 
})