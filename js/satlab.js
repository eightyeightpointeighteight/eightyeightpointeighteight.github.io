    var brandVid = document.getElementById('brand');


// init controller
	var controller = new ScrollMagic.Controller();

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#brand", duration:"50%", offset: 100})
					.addTo(controller)
					.addIndicators() // add indicators (requires plugin)
					
					.on("enter", function () {
				    brandVid.play();
					})
					.on("leave", function () {
				    brandVid.pause();
					})
    
        var titleHeader = document.getElementById('header');


