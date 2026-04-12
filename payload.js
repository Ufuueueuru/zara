setTimeout(async () => {
	
	//Fix the top left menu
	let span1 = document.createElement("span");
	span1.setAttribute("class", "animated-hamburger-ss26__line-2");
	parent = document.querySelector(".layout-open-menu-base > .animated-hamburger-ss26");
	parent.setAttribute("style", "--animated-hamburger-width: 64px; --animated-hamburger-height: 32px; background: white; padding: 5px; outline: 5px solid red;");
	parent.appendChild(span1);
	
	let menu = document.querySelector(".zds-carousel-content.zds-carousel-content--vertical");
	
	for (let i = 0; i < 7; i++) {
		menu.children[i].href = menu.children[i].href.split("zara.com/us/en/")[1];
	}
	//changing the category names
	menu.children[0].children[0].children[0].children[0].innerHTML = "WOMEN";
		menu.children[0].children[0].children[0].children[0].style.outline = "5px solid red";//marking our changes
	menu.children[1].children[0].children[0].children[0].innerHTML = "MEN";
		menu.children[1].children[0].children[0].children[0].style.outline = "5px solid red";//marking our changes
	//KIDS is unchanged
	menu.children[3].children[0].children[0].children[0].innerHTML = "FURNITURE";
		menu.children[3].children[0].children[0].children[0].style.outline = "5px solid red";//marking our changes
	//BEAUTY is unchanged
	menu.children[5].children[0].children[0].children[0].innerHTML = "DUTTI BRAND";
		menu.children[5].children[0].children[0].children[0].style.outline = "5px solid red";//marking our changes
	menu.children[6].children[0].children[0].children[0].innerHTML = "SRPLS BRAND";
		menu.children[6].children[0].children[0].children[0].style.outline = "5px solid red";//marking our changes
	//PRE-OWNED is unchanged	
	let travelMode = menu.children[menu.children.length - 1];
	travelMode.remove();

	//no pseudo-classes :C (all of my comments will be removed after final stuff)
	let search = document.querySelector(".layout-header-desktop-action-search");
    search.setAttribute("style", "background-color: rgba(0,0,0,0.1); border-radius: 4px;");
	search.style.outline = "5px solid red";

	//adding events to simulate hover
	search.addEventListener("mouseenter", () => {
    search.style.backgroundColor = "rgba(0,0,0,0.15)";
	});
	search.addEventListener("mouseleave", () => {
    search.style.backgroundColor = "rgba(0,0,0,0.1)";
	});
	//re-applies border to search background
	search.addEventListener("click", () => {
    search.style.backgroundColor = "rgba(0,0,0,0.25)";
	search.style.outline = "5px solid red";
	});
	
	//adding the white backgrounds to the sidebars
	let sidebarBackgroundLeft = document.createElement("div");
	sidebarBackgroundLeft.setAttribute("class","zds-layout-desktop__left-overlay");
	sidebarBackgroundLeft.setAttribute("aria-hidden","false");
	sidebarBackgroundLeft.style.outline = "5px solid red";
	let sidebarBackgroundRight = document.createElement("div");
	sidebarBackgroundRight.setAttribute("class","zds-layout-desktop__right-overlay");
	sidebarBackgroundRight.setAttribute("aria-hidden","false");
	sidebarBackgroundRight.style.outline = "5px solid red";
	let whereSidebarShouldBe = document.querySelector(".layout");
	whereSidebarShouldBe.children[1].insertBefore(sidebarBackgroundLeft,whereSidebarShouldBe.children[1].children[0]);
	whereSidebarShouldBe.children[1].insertBefore(sidebarBackgroundRight,whereSidebarShouldBe.children[1].children[0]);
	
	//shrinking all media
	let allMediaBars = document.querySelectorAll(".slider-spot__slide");
	for(let bar of allMediaBars){
		bar.style.marginBottom = "1%";
		bar.style.marginLeft = "15%";//half the width
		bar.style.height = "70%";
		bar.style.width = "70%";
		bar.style.outline = "5px solid red";
	}
	
	
	//navigating to our changed swimwear sites
	//let swimwearMen = document.querySelector("");
	//swimwearMen.setAttribute("href","");
}, 3000);