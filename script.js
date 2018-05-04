var firstColor = document.querySelector(".firstColor");
var secondColor = document.querySelector(".secondColor");
var body = document.getElementById("gradient");
var h3 = document.getElementById("textName");
var reset = document.getElementById("reset");
var random = document.getElementById("random");



/*function changeFirstColor(evt) {
	changeBackgroundColor();
	h3.appendChild(document.createTextNode(evt.target.firstColor.value));
}

function changeSecondColor(evt) {
	changeBackgroundColor();
	h3.appendChild(document.createTextNode(evt.target.secondColor.value));
}*/

reset.addEventListener("click", function() {
	firstColor.value = "#f0f000";
	secondColor.value = "#0f00f0";
	body.style.background = "linear-gradient(to right, "+firstColor.value+", "+secondColor.value+")";
	h3.textContent = body.style.background + ";";
})

random.addEventListener("click", function() {
	var letters1 = "012345689ABCDEF";
	var color1 = "#";
	for (var i=0; i<6; i++) {
		color1 += letters1[Math.floor(Math.random()*16)];
	}
	firstColor.value = color1;
	var letters2 = "012345689ABCDEF";
	var color2 = "#";
	for (var i=0; i<6; i++) {
		color2 += letters2[Math.floor(Math.random()*16)];
	}
	secondColor.value = color2;
	body.style.background = "linear-gradient(to right, "+firstColor.value+", "+secondColor.value+")";
	h3.textContent = body.style.background + ";";
})


function changeBackgroundColor() {
	body.style.background = "linear-gradient(to right, "+firstColor.value+", "+secondColor.value+")";
	h3.textContent = body.style.background + ";";
}


firstColor.addEventListener("input", changeBackgroundColor);
secondColor.addEventListener("input", changeBackgroundColor);