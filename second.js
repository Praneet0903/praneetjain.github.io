const arr = ["myImgs/myimg2.jpg","myImgs/myimg3.jpg","myImgs/myimg4.jpg","myImgs/mySexyImg.jpg"]

function changeImg(element){
    let x = Math.floor((Math.random() * 3));
    element.src = arr[x];
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