let myArray = [];

function myFunc(element){
  element.style.backgroundColor = "#FF0000";
  myArray.push(element);
  console.log(myArray);
}

function resetColor(element){
	element.style.backgroundColor = "#00008B";
}

function myFuncReset(element){
	element.style.backgroundColor = "#FF0000";
  	myArray.push(element);
  	console.log(myArray);
	for(var i = 0; i < myArray.length; i++){
		(function(i){
			setTimeout(function(){
				myArray[i].style.backgroundColor = "#00008B";
			}, 200 * (i + 1));
		})(i);
	}
}

burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
nav = document.querySelector('.nav');
ham = document.querySelector('#ham');

let state=0;

ham.addEventListener('click',()=>{
	navbar.classList.toggle('h-nav');
	nav.classList.toggle('v-class');
	if(state==0){
		ham.src = "logos/hamburger-cross.png";
		state=1;
	}
	else{
		ham.src = "logos/hamburger.png";
		state=0;
	}
})


