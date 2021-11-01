let thai = document.querySelector('#Thai');
thai.addEventListener('click', thaiRes);

function thaiRes(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert("Bangkok Thai Cuisine");
}

let mexican = document.querySelector('#Mexican');
mexican.addEventListener('click', mexicanRes);

function mexicanRes(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert("On The Broder Mexican Grill");
}

let american = document.querySelector('#American');
american.addEventListener('click', americanRes);

function americanRes(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert("Big Dip Burgers");
}

let indian = document.querySelector('#Indian');
indian.addEventListener('click', indianRes);

function indianRes(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert("Shalimar Indian Cuisine");
}

let italian = document.querySelector('#Italian');
italian.addEventListener('click', italianRes);

function italianRes(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert("Olive Garden");
}

let japanese = document.querySelector('#Japanese');
japanese.addEventListener('click', japaneseRes);

function japaneseRes(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert("Shushi World");
}
