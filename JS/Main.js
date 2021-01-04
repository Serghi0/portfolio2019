
var x = window.matchMedia("(min-width: 768px)");
function checkMenu(){
	if(x.matches){
		document.getElementById('menu').className = "active";
	}

}

var tl = new TimelineMax(),
	body = document.getElementsByTagName("BODY")[0],
	main = document.getElementsByTagName('main'),
	welcome = document.getElementById('welcome'),
	introText = document.getElementById('introText');

//Timeline
tl
	.fromTo(body,1,{autoAlpha:0},{autoAlpha:1})
	.fromTo(welcome,5,{autoAlpha:0},{autoAlpha:1})
	.fromTo(introText,1,{autoAlpha:0, y:100},{autoAlpha:1, y:0},2);

	document.getElementsByTagName("BODY")[0].onload = function(){checkMenu()};
	document.getElementsByTagName("BODY")[0].onresize = function(){checkMenu()};

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
				.fromTo(menu,0, {autoAlpha:1, y:0},{autoAlpha:0,y:-100},-1);
		} else {
			menu.className = "active";
			header.classList.remove("dark");
			header.classList.add ("light");
			document.getElementById('hamburgerIcon').className = "activeMenu";
	
			tlMenu
				.set(body, {className: '-=inactiveMenu'})
				.set(body, {className: '+=activeMenu'})
				.fromTo(menu,0, {autoAlpha:0, y:-100},{autoAlpha:1, y:0},-2);		
		}
	};
	
	// $(function(){
	// 	$("#bioPic").on({
	// 	 mouseenter: function(){
	// 	  $(this).attr('src','Images/bio.jpeg');
	// 	},
	// 	mouseleave: function(){
	// 	  $(this).attr('src','Images/bio.png');
	// 	}
	// 	});
		
	//   });

	gsap.fromTo("#about-me", {
		scrollTrigger: "#about-me", // start the animation when ".box" enters the viewport (once)
		y: 200,
		autoAlpha:0
	  },{
		scrollTrigger: "#about-me",
		duration:1,
		y:0,
		autoAlpha:1
	});
	gsap.fromTo("#skills", {
		scrollTrigger: "#skills", // start the animation when ".box" enters the viewport (once)
		y:200,
		autoAlpha:0
	  },{
		scrollTrigger: "#skills",
		y:0,
		autoAlpha:1
	});
	gsap.fromTo("#work-one", {
		scrollTrigger: "#work-one", // start the animation when ".box" enters the viewport (once)
		x:-1000,
		autoAlpha:0
	  },{
		scrollTrigger: "#work-one",
		duration:1,
		x:0,
		autoAlpha:1
	});
	gsap.fromTo("#work-two", {
		scrollTrigger: "#work-two", // start the animation when ".box" enters the viewport (once)
		x:1000,
		autoAlpha:0
	  },{
		scrollTrigger: "#work-two",
		duration:1,
		x:0,
		autoAlpha:1
	});
	gsap.fromTo("#work-three", {
		scrollTrigger: "#work-three", // start the animation when ".box" enters the viewport (once)
		x:-1000,
		autoAlpha:0
	  },{
		scrollTrigger: "#work-three",
		duration:1,
		x:0,
		autoAlpha:1
	});
	gsap.fromTo("#contact", {
		scrollTrigger: "#contact", // start the animation when ".box" enters the viewport (once)
		y: 200,
		autoAlpha:0
	  },{
		scrollTrigger: "#contact",
		duration:1,
		y:0,
		autoAlpha:1
	});