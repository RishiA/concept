$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("#logohome", 1, 
				{marginTop: -300, ease: Back.easeOut},
				{marginTop: 240, ease: Back.easeOut, delay: 0.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#home", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("#welcome", 0.5, 
				{marginTop: -400, ease: Back.easeOut},
				{marginTop: 60, ease: Back.easeOut}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#mugdha-rishi", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("#bubble-endlich", 0.2, 
				{scale: 0, ease: Back.easeOut},
				{scale: 1, ease: Back.easeOut, delay: 1.8}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#mugdha-rishi", triggerHook: 0.4})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("#bubble-gehtdoch", 0.5, 
				{scale: 0, ease: Back.easeOut},
				{scale: 1, ease: Back.easeOut, delay: 0.8}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#mugdha-rishi", triggerHook: 0.4})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#bubble-das-brautpaar", 0.5, 
				{marginTop: -250, ease: Back.easeOut, rotation: 0},
				{marginTop: 50, ease: Back.easeOut, rotation: 350}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-brautpaar", triggerHook: 0.4})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#caro", 0.5, 
				{marginLeft: -2000, rotation: -360, ease: Back.easeOut},
				{marginLeft: 0, rotation: 0, ease: Back.easeOut, delay: 0.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-brautpaar", triggerHook: 0.4})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("#carotxt", 0.5, 
				{opacity: 0},
				{opacity: 1, delay: 0.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-brautpaar", triggerHook: 0.4})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#johannes", 0.5, 
				{marginLeft: 2000, rotation: 0, ease: Back.easeOut},
				{marginLeft: 0, rotation: -360, ease: Back.easeOut, delay: 1.2}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-brautpaar", triggerHook: 0.4})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("#jotxt", 0.5, 
				{opacity: 0},
				{opacity: 1, delay: 1.2}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-brautpaar", triggerHook: 0.4})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#bubble-die-trauzeugen", 0.5, 
				{scale: 0, ease: Back.easeOut, rotation: 0},
				{scale: 1, ease: Back.easeOut, rotation: 360}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#die-trauzeugen", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#henni", 0.5, 
				{scale: 0, rotation: -100, ease: Back.easeOut},
				{scale: 1, rotation: 0, ease: Back.easeOut, delay: 0.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#die-trauzeugen", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("#hennitxt", 0.5, 
				{opacity: 0},
				{opacity: 1, delay: 0.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#die-trauzeugen", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#julian", 0.5, 
				{scale: 0, rotation: 100, ease: Back.easeOut},
				{scale: 1, rotation: 0, ease: Back.easeOut, delay: 1.2}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#die-trauzeugen", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("#juliantxt", 0.5, 
				{opacity: 0},
				{opacity: 1, delay: 1.2}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#die-trauzeugen", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#steffi", 0.5, 
				{scale: 0, rotation: -100, ease: Back.easeOut},
				{scale: 1, rotation: 0, ease: Back.easeOut, delay: 1.9}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#die-trauzeugen", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("#steffitxt", 0.5, 
				{opacity: 0},
				{opacity: 1, delay: 0.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#die-trauzeugen", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#bubble-fakten", 0.5, 
				{marginTop: -120, ease: Back.easeOut},
				{marginTop: 50, ease: Back.easeOut}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#zusammensein", triggerHook: 0.7})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("p#intro", 0.5, 
				{marginTop: "30%", width: "100%"},
				{marginLeft: 0}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#zusammensein", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("div#counter1", 0.5, 
				{marginLeft: "-200%", width: "100%"},
				{marginLeft: 0}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#zusammensein", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("div#duesseldorf", 0.3, 
				{scale: 0, ease: Back.easeOut},
				{scale: 1, ease: Back.easeOut, delay: 0.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#zusammensein", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("div#counter2", 0.5, 
				{marginLeft: "300%", width: "100%"},
				{marginLeft: 0, delay: 1}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#zusammensein", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("div#malediven", 0.3, 
				{scale: 0, ease: Back.easeOut},
				{scale: 1, ease: Back.easeOut, delay: 1.5}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#zusammensein", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("div#warum-nicht", 0.5, 
				{scale: 0.5, opacity: 0},
				{scale: 1.2, opacity: 1, delay: 2}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#zusammensein", triggerHook: 0.3})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#lichterkette", 0.5, 
				{marginTop: "-40%", ease: Back.easeOut},
				{marginTop: "-10%", ease: Back.easeOut, delay: 2.6}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-fest-img", triggerHook: 0.5})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#bubble-das-fest", 0.5, 
				{marginTop: -150, ease: Back.easeOut},
				{marginTop: "5%", ease: Back.easeOut }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-fest-img", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#location-arrow", 0.3, 
				{scale: 0, ease: Back.easeOut, marginTop: 300},
				{scale: 1, ease: Back.easeOut, marginTop:0, delay: 1.5 }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-fest-img", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#location-arrow-2", 0.3, 
				{scale: 0, ease: Back.easeOut, marginTop: -300, marginRight: -300},
				{scale: 1, ease: Back.easeOut, marginTop: 0,  marginRight: 0, delay: 1.8 }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-fest-img", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#location-arrow-3", 0.3, 
				{scale: 0, ease: Back.easeOut, marginTop: -300, marginRight: 300},
				{scale: 1, ease: Back.easeOut, marginTop: 0,  marginRight: 0, delay: 2.1 }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-fest-img", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#party1", 0.3, 
				{scale: 0, ease: Back.easeOut, rotation:0},
				{scale: 1, ease: Back.easeOut, rotation:350, delay: 3 }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-fest-img", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#party2", 0.3, 
				{scale: 0, ease: Back.easeOut, rotation:0},
				{scale: 1, ease: Back.easeOut, rotation:380, delay: 3.3 }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#das-fest-img", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#bubble-uebernachten", 0.5, 
				{marginTop: -250, ease: Back.easeOut},
				{marginTop: "3%", ease: Back.easeOut }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#uebernachten", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#haende", 0.5, 
				{marginTop: -650, ease: Bounce},
				{marginTop: 0, ease: Bounce, delay: 0.7}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#die-trauung", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#bubble-trauung", 0.5, 
				{marginTop: -250, ease: Back.easeOut},
				{marginTop: "1.5%", ease: Back.easeOut }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#die-trauung", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#bubble-ich-will-2", 0.5, 
				{marginTop: -250, ease: Back.easeOut},
				{marginTop: 50, ease: Back.easeOut }
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#anmeldung", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#bubble-auf-die-party", 0.5, 
				{scale: 0, ease: Back.easeOut, rotation: 0},
				{scale: 1, ease: Back.easeOut, rotation: 365, delay: 1}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#anmeldung", triggerHook: 0.6})
					.setTween(tween)
					.addTo(controller);
});
$(document).ready(function($) {
	// build tween
	var tween = TweenMax.fromTo("img#bubble-googlemap", 0.5, 
				{marginBottom: -200, ease: Back.easeOut},
				{marginBottom: 10, ease: Back.easeOut}
				);

	// build scene
	var scene = new ScrollScene({triggerElement: "section#googlemap", triggerHook: 0.4})
					.setTween(tween)
					.addTo(controller);
});