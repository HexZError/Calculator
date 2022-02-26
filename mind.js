let display = document.getElementById('display-box');
let buttontext = document.querySelectorAll('button');
let clearscreen = '';


function getvalue(num){
	display.value += num;
}
function Calculate(){
	display.value = eval(display.value);
}
function clr(){
	display.value = clearscreen;
}

function del(){
	let str = display.value;
	let size = str.length;
	display.value = display.value.slice(0,size-1);
	console.log(size);
}