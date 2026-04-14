function changeLink(oldURLBase, newURL) {
	setInterval(() => {document.querySelectorAll("[href]").forEach((a) => {if (a.href.startsWith(oldURLBase)) {a.href = newURL}})}, 50);
}



setTimeout(async () => {
	
	//Fix the top left menu
	let span1 = document.createElement("span");
	span1.setAttribute("class", "animated-hamburger-ss26__line-2");
	parent = document.querySelector(".layout-open-menu-base > .animated-hamburger-ss26");
	parent.setAttribute("style", "--animated-hamburger-width: 64px; --animated-hamburger-height: 32px; background: white; padding: 5px; outline: 5px solid red;");
	parent.appendChild(span1);
	
	let menu = document.querySelector(".zds-carousel-content.zds-carousel-content--vertical");
	
	for (let index = 0; index < 7; index++) {
		menu.children[index].href = menu.children[index].href.split("zara.com/us/en/")[1];
	}
	//changing the category names
	menu.children[0].children[0].children[0].children[0].innerHTML = "WOMEN";
		menu.children[0].children[0].children[0].children[0].style.outline = "5px solid red";//marking our changes
	menu.children[1].children[0].children[0].children[0].innerHTML = "MEN";
		menu.children[1].children[0].children[0].children[0].style.outline = "5px solid red";//marking our changes
	//KIDS' text is unchanged but we changed it in other ways
		menu.children[2].children[0].children[0].children[0].style.outline = "5px solid red";//marking our changes
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
	
	//fixing the menu so it works again hopefully
		//dot indicator
	let dotIndicator = document.querySelector(".zds-dot-list-indicator");
	dotIndicator.style = "transform: translateY(-18px); transition-duration: 0ms;";
		//clicking stuff? maybe? not really sure what this does
	let mouseNavigationRegion = document.querySelector(".zds-carousel-accessibility-mouse-navigation-region.zds-carousel-accessibility-mouse-navigation-region--top");
	mouseNavigationRegion.setAttribute("inert","");
	mouseNavigationRegion.setAttribute("aria-disabled","true");

	let subCats = document.querySelector(".zds-carousel.zds-tabs__panel-list.layout-categories__tabs-panel-list-wrapper").children[0].children[0];
	menu.style = "gap: 6px; transform: translate3d(0px, 0px, 0px);";
	

	let womenLinks = [["ALL ITEMS - WOMEN","./woman-mkt1000.html"],
					["SUMMER STRIPES","./woman-stripes-l15863.html"],
					["BEACHWEAR - WOMEN","./woman-beachwear-l1052.html"],
					["SHIRTS - WOMEN","./woman-shirts-l1217.html"],
					["TROUSERS - WOMEN","./woman-trousers-l1335.html"]];
	
	let menLinks = [["ALL ITEMS - MEN","./man-l534.html"],
					["VACATION COLLECTION","./man-vacation-collection-l17370.html"],
					["BEACHWEAR - MEN","./man-beachwear-l590.html"],
					["SHIRTS - MEN","./man-shirts-l737.html"],
					["TROUSERS - MEN","./man-trousers-l838.html"]];
	
	let kidLinks = [["ALL ITEMS - KIDS","./kids-mkt1.html"],
					["BEACHWEAR - GIRLS","./kids-girl-beachwear-l350.html"],
					["BEACHWEAR - BOYS","./kids-boy-beachwear-l201.html"],
					["SHIRTS - GIRLS","./kids-girl-tshirts-l450.html"],
					["SHIRTS - BOYS","./kids-boy-tshirts-l286.html"],
					["TROUSERS - GIRLS","./kids-girl-trousers-l439.html"],
					["TROUSERS - BOYS","./kids-boy-trousers-l274.html"]];
	
	let arrayToUse = womenLinks;
	clickBigCategory(womenLinks);
	function clickBigCategory(newArray){
		arrayToUse = newArray;
		if(arrayToUse === womenLinks){
			menu.children[0].children[0].children[0].children[0].style.fontSize = "125%";
			menu.children[1].children[0].children[0].children[0].style.fontSize = "100%";
			menu.children[2].children[0].children[0].children[0].style.fontSize = "100%";
			
		} else if(arrayToUse === menLinks){
			menu.children[0].children[0].children[0].children[0].style.fontSize = "100%";
			menu.children[1].children[0].children[0].children[0].style.fontSize = "125%";
			menu.children[2].children[0].children[0].children[0].style.fontSize = "100%";
		} else if(arrayToUse === kidLinks){
			menu.children[0].children[0].children[0].children[0].style.fontSize = "100%";
			menu.children[1].children[0].children[0].children[0].style.fontSize = "100%";
			menu.children[2].children[0].children[0].children[0].style.fontSize = "125%";
			
		}
		for(let index2 = 0; index2 < 8; index2++){
			let thisButton = subCats.children[0].children[0].children[index2*2].children[0];
			if((thisButton === undefined) || (!(thisButton.hasChildNodes())) || (thisButton.children.length <= 1)){
				//if there aren't at least two children, don't do anything
			} else {
				if((arrayToUse == undefined) || (arrayToUse[index2] == undefined)){
					thisButton.children[1].children[0].innerHTML = "";
					thisButton.setAttribute("href","");
				} else {
					thisButton.children[1].children[0].innerHTML = arrayToUse[index2][0];
					thisButton.setAttribute("href",arrayToUse[index2][1]);
				}
			}
		}
	}
	function clickWomen(){
		clickBigCategory(womenLinks);
	}
	function clickMen(){
		clickBigCategory(menLinks);
	}
	function clickKid(){
		clickBigCategory(kidLinks);
	}
	
	menu.children[0].addEventListener("click",clickWomen);
	menu.children[0].removeAttribute("href");
	menu.children[1].addEventListener("click",clickMen);
	menu.children[1].removeAttribute("href");
	menu.children[2].addEventListener("click",clickKid);
	menu.children[2].removeAttribute("href");
	clickWomen();
	
	
	for(let index = 0; index < 8; index++){
			//button part
		menu.children[index].setAttribute("id","tabs-10-tab-".concat(menu.children[index].getAttribute("data-categoryid")));
		menu.children[index].setAttribute("class","zds-carousel-item zds-tabs-tab layout-categories-category layout-categories-category--level-1 layout-categories-category-level-1 link");
		menu.children[index].setAttribute("aria-controls","tabs-10-tabpanel-".concat(menu.children[index].getAttribute("data-categoryid")));
		menu.children[index].setAttribute("aria-selected","false");
		menu.children[index].setAttribute("data-ecomfront-carousel-is-visible","true");
		menu.children[index].setAttribute("id","tabs-10-tab-".concat(menu.children[index].getAttribute("data-categoryid")));

		//(menu.children[index]).addEventListener("click",o);
					//subcategories part
		subCats.children[index].setAttribute("id","tabs-10-tabpanel-".concat(subCats.children[index].getAttribute("data-zds-tabs-panel-value")));
		subCats.children[index].setAttribute("aria-labelledby","tabs-10-tab-".concat(subCats.children[index].getAttribute("data-zds-tabs-panel-value")));
		subCats.children[index].setAttribute("data-ecomfront-carousel-is-visible","false");
		//subCats.children[index].children[1].children[0].children[0].setAttribute("style","");//remove the 'visibility:hidden'
	}
	
	//replacing the first one
	menu.children[0].setAttribute("class","zds-carousel-item zds-tabs-tab layout-categories-category layout-categories-category--level-1 layout-categories-category--highlighted layout-categories-category-level-1 zds-tabs-tab--selected link");
	menu.children[0].setAttribute("aria-selected","true");
	subCats.children[0].setAttribute("class","zds-carousel-item zds-tabs-tab-panel layout-categories__tabs-panel layout-categories__tabs-panel-animation");
	subCats.children[0].setAttribute("data-ecomfront-carousel-is-visible","true");
	
	
	
	

	//no pseudo-classes :C (all of my comments will be removed after final stuff)
	let search = document.querySelector(".layout-header-desktop-action-search");
    search.setAttribute("style", "background-color: rgba(0,0,0,0.1); border-radius: 4px;");
	search.style.outline = "5px solid red";
	let searchWord = document.createElement("span");
	searchWord.innerHTML = "Search";
	if((!search.hasChildNodes()) || (search.children.length <= 0)){
		search.appendChild(searchWord);
	}
	
	//readding shopping bag, log in, help buttons on right side
		//shopping as usual i see
	let shopping = document.querySelector(".layout-actionable.layout-header-desktop-action-cart.link");
	let shopText = document.createElement("span");
	shopText.innerHTML = "Shopping Bag";
	if(shopping.children[0].innerHTML != "Shopping Bag"){
		shopping.insertBefore(shopText,shopping.children[0]);
	}
		//log in
	let logging = document.querySelector(".layout-actionable.layout-desktop-account-action.layout-header-desktop-action-account.link");
	logging.innerHTML = "LOG IN";
		//help
	let helping = document.querySelector(".layout-actionable.layout-header-desktop-action-help.link");
	helping.innerHTML = "HELP";

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
	//removing all separators
	let allGridSeparators = document.querySelectorAll(".products-category-grid-separator.product-grid-block-dynamic__spacer.product-grid-block-dynamic__spacer--grid-template-spacing-01");
	for(let sep of allGridSeparators){
		sep.style.height = "1%";
	}
	
	
	
	let allGridRows = document.querySelectorAll(".product-grid-block-dynamic__row");
	for(let row of allGridRows){
		row.style.marginLeft = "15%";//half the width
		row.style.width = "70%";
		row.style.outline = "5px solid red";
		row.style.marginBottom = "10";
		document
	}
	
	//changing links to the main changed page
	let mainPageLink = document.querySelector(".menu-header-logo__link");
	mainPageLink.href = "./index.html";
	
	//navigating to our changed other sites
	changeLink("https://www.zara.com/us/en/man-l534.html","./man-l534.html");
	changeLink("https://www.zara.com/us/en/man-beachwear-l590.html","./man-beachwear-l590.html");
	changeLink("https://www.zara.com/us/en/man-vacation-collection-l17370.html","./man-vacation-collection-l17370.html");
	changeLink("https://www.zara.com/us/en/man-shirts-l737.html","./man-shirts-l737.html");
	changeLink("https://www.zara.com/us/en/man-trousers-l838.html","./man-trousers-l838.html");
	
	changeLink("https://www.zara.com/us/en/woman-mkt1000.html","./woman-mkt1000.html");
	changeLink("https://www.zara.com/us/en/woman-stripes-l15863.html","./woman-stripes-l15863.html");
	changeLink("https://www.zara.com/us/en/woman-beachwear-l1052.html","./woman-beachwear-l1052.html");
	changeLink("https://www.zara.com/us/en/woman-shirts-l1217.html","./woman-shirts-l1217.html");
	changeLink("https://www.zara.com/us/en/woman-trousers-l1335.html","./woman-trousers-l1335.html");
	
	changeLink("https://www.zara.com/us/en/kids-mkt1.html","./kids-mkt1.html");
	changeLink("https://www.zara.com/us/en/kids-girl-tshirts-l450.html","./kids-girl-tshirts-l450.html");
	changeLink("https://www.zara.com/us/en/kids-girl-trousers-l439.html","./kids-girl-trousers-l439.html");
	changeLink("https://www.zara.com/us/en/kids-girl-beachwear-l350.html","./kids-girl-beachwear-l350.html");
	changeLink("https://www.zara.com/us/en/kids-boy-tshirts-l286.html","./kids-boy-tshirts-l286.html");
	changeLink("https://www.zara.com/us/en/kids-boy-trousers-l274.html","./kids-boy-trousers-l274.html");
	changeLink("https://www.zara.com/us/en/kids-boy-beachwear-l201.html","./kids-boy-beachwear-l201.html");
	
	
	changeLink("https://static.zara.net/stdstatic/8.12.0/js/v2/vendor-v2.js","./vendor-v2.js");
}, 3000);