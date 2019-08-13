document.getElementById('menu-button').onclick = function () {
	// document.getElementsByClassName('hamburgerIcon').style.content="\f12a";

	var menu = document.getElementById('menu'),
		tlMenu = new TimelineMax();
	if(menu.className == "active"){
		menu.className = "inactive";
	  document.getElementById('hamburgerIcon').classList.remove("activeMenu");
		tlMenu
			.fromTo(menu,0.5, {autoAlpha:1},{autoAlpha:0});
	} else {
		menu.className = "active";
	    document.getElementById('hamburgerIcon').className = "activeMenu";

		tlMenu
			.fromTo(menu,0.5, {autoAlpha:0},{autoAlpha:1});		
	}
};



var tl = new TimelineMax(),
	main = document.getElementsByTagName('main');


//Timeline
tl
	.set(main, {autoAlpha:0, x:1000})
	.to(main,1.5,{autoAlpha:1, x:0,ease:Back.easeNone});


 // next.onclick = function () {
 // tl
 // 	.fromTo(main,2,{autoAlpha:0, x:0}, {autoAlpha:1, x:-2000});	
 // };

 // previous.onclick = function () {
 // tl
 // 	.fromTo(main,2,{autoAlpha:0, x:0}, {autoAlpha:1, x:2000});
 // };

 // window.onbeforeunload = function(){
 // tl
 // 	.fromTo(main,5,{autoAlpha:0, x:0}, {autoAlpha:1, x:2000});

 // };


// var hamburgerIcon = document.getElementsByClassName('hamburgerIcon');
//  document.getElementById('menu-button').onclick = function(){
//  	console.log("k");
//  	// document.getElementsByClassName('menu-button:before').style.content="\f12a";
//  };