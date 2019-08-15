document.getElementById('menu-button').onclick = function () {
	// document.getElementsByClassName('hamburgerIcon').style.content="\f12a";

	var menu = document.getElementById('menu'),
		header = document.getElementById('header'),
		body = document.getElementsByTagName("BODY")[0],
		tlMenu = new TimelineMax();
	if(menu.className == "active"){
		menu.className = "inactive";
		header.classList.remove("light");
		header.classList.add("dark");
	  	document.getElementById('hamburgerIcon').classList.remove("activeMenu");
		tlMenu
			.set(body, {className: '-=activeMenu'})
			.set(body, {className: '+=inactiveMenu'})		
			.fromTo(menu,0.5, {autoAlpha:1, y:0},{autoAlpha:0,y:-100},-1);
	} else {
		menu.className = "active";
		header.classList.remove("dark");
		header.classList.add ("light");
	    document.getElementById('hamburgerIcon').className = "activeMenu";

		tlMenu
			.set(body, {className: '-=inactiveMenu'})
			.set(body, {className: '+=activeMenu'})
			.fromTo(menu,1, {autoAlpha:0, y:-100},{autoAlpha:1, y:0},-2);		
	}
};



var tl = new TimelineMax(),
	main = document.getElementsByTagName('main'),
	welcome = document.getElementById('welcome'),
	introText = document.getElementById('introText');



//Timeline
tl
	.fromTo(welcome,1,{autoAlpha:0},{autoAlpha:1})
	.fromTo(introText,1,{autoAlpha:0, y:100},{autoAlpha:1, y:0},1);

