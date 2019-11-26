// JavaScript Document
const martini_glass = document.querySelector('.martini_glass');
const water = document.querySelector('.water');
const shadow = document.querySelector('.shadow');
const olive_first = document.querySelector('.olive_first');
const shadow_olive_first = document.querySelector('.shadow_olive_first');
const olives = document.querySelector('.olives');
const big_circle = document.querySelector('.big_circle');
const small_circle = document.querySelector('.small_circle');
const cocktail = document.querySelector('.cocktail');
const you = document.querySelector('.you');
const line = document.querySelector('.line');
const tlm = new TimelineMax({});


	tlm.from(martini_glass,1,{opacity:0,x:'-150'},'fade1');
	tlm.from(water,1,{opacity:0,x:'-150'},'fade1');
	tlm.from(shadow,1,{opacity:0,x:'-150'},'fade1');

	tlm.from(olive_first,1.5,{opacity:0,y:'-200',ease: Bounce.easeOut});
	tlm.from(shadow_olive_first,1,{opacity:0},'-=.4');

	tlm.from(olives,1,{y:'-200',rotation: 180, transformOrigin:"50% 50%", opacity: 0, ease: Expo.easeOut},'olives');

	tlm.from(big_circle, 1, {x: 100, opacity: 0, ease: Power1.easeOut}, '-=.7');
	tlm.from(small_circle, 1, {x: 100, opacity: 0, ease: Power1.easeOut}, '-=.7');

	tlm.from(cocktail,1,{y:-150,opacity:0,ease: Power4.easeOut},'-=.1');
	tlm.from(you,1,{y:-150,opacity:0,ease: Bounce.easeOut},'-=.9');
	tlm.from(line,1,{x:200,opacity:0,ease: Power1.easeOut})
	
	



