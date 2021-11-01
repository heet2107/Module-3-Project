//console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert("The form has been submitted successfully.");
}

// function alertMsg() {
// 	alert("Yessss! You got this....");
//   }

let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);


let duckImage = document.querySelector('#rubberDuck')
duckImage.addEventListener('mouseover', handleMouseover)

function handleMouseover() {
	alert("Yessss! You got this....");
}
