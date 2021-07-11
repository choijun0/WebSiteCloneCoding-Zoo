const clickBar = document.querySelector("ul");
const panel = document.getElementById("panel");
const button = document.querySelector("button");

panel.classList.add("hideWindow");

const onClick = (event) => {
	if(panel.classList.contains("showWindow")){
		panel.classList.remove("showWindow");
		panel.classList.add("hideWindow");
	}
	else{
		panel.classList.remove("hideWindow");
		panel.classList.add("showWindow");
	}
}

clickBar.addEventListener("click", onClick);
button.addEventListener("click", onClick);