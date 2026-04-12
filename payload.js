setTimeout(async () => {
	
	//Fix the top left menu
	let span1 = document.createElement("span");
	span1.setAttribute("class", "animated-hamburger-ss26__line-2");
	parent = document.querySelector(".layout-open-menu-base > .animated-hamburger-ss26");
	parent.setAttribute("style", "--animated-hamburger-width: 64px; --animated-hamburger-height: 32px; background: white; padding: 5px;");
	parent.appendChild(span1);
	
	let menu = document.querySelector(".zds-carousel-content.zds-carousel-content--vertical");
	
	for (let i = 0; i < 7; i++) {
		menu.children[i].href = menu.children[i].href.splice("zara.com/us/en/")[1];
	}
	menu.children[0].children[0].children[0].children[0].innerHTML = "WOMEN";
	menu.children[1].children[0].children[0].children[0].innerHTML = "MEN";
	
	menu.children[3].children[0].children[0].children[0].innerHTML = "FURNITURE";
	
	menu.children[5].children[0].children[0].children[0].innerHTML = "DUTTI BRAND";
	menu.children[6].children[0].children[0].children[0].innerHTML = "SRPLS BRAND";
	
	
	let travelMode = menu.children[menu.children.length - 1];
	travelMode.remove();
}, 3000);