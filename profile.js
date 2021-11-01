let color = document.querySelector('#color');
color.addEventListener('click', favColor);

function favColor(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert("Black");
}

let place = document.querySelector('#place');
place.addEventListener('click', favPlace);

function favPlace(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert("Leh-Ladakh");
}

let ritual = document.querySelector('#ritual');
ritual.addEventListener('click', favRitual);

function favRitual(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert("Hindu");
}