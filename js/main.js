function interrogate () {


var firstName= prompt('What is your first name?');
var surName= prompt('What is your surname?');
var fullName= firstName + ' ' + surName; 
console.log(fullName);



function ageQuestion(message) {

	var age= prompt(message); 
	age= parseInt(age); 

	if (isNaN(age)) { 
		ageQuestion ('how old are you? use numbers!!');
	}

	if (age>=18) {
		console.log('user is an adult');
	  }
}

 ageQuestion('how old are you?');

if (firstName.toLowerCase() ==='general' && surName.toLowerCase() !=='assembly')
{
	console.log('Hi General');
}


var faveColor= prompt('what is your favourite color?');
faveColor= faveColor.toLowerCase().trim();
if (faveColor==='red' ||
	faveColor=== 'green') {
	$('h1').css('color', faveColor)
}

}

// when the page loads 
$ (function() {

$('img').on('click', interrogate)
	// when the user clicks a h3
	$('h3').on('click', function() {
	// toggle the next element 
	$(this).next().slideToggle(400); 

	}); 


}); 