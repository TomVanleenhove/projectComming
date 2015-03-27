var template = require('../../../_hbs/sunset.hbs');

var SunsetView = Backbone.View.extend({

	template: template,
	changeStep: function(step){
		var line = document.querySelector('.sunline');
		var lineLength = line.getTotalLength();
		switch(step) {
		    case "1":
		    $(".gradient1").fadeTo( "slow" , 0.8, function() {});
			$(".sterren").fadeTo( "slow" , 0.8, function() {});
			$("#sun").addClass("sun2");
			line.setAttributeNS(null, "stroke-dashoffset", lineLength - 100);
		        break;
	    	case "2":
	    	$(".gradient1").fadeTo( "slow" , 0.5, function() {});
			$(".sterren").fadeTo( "slow" , 0.5, function() {});
			$("#sun").addClass("sun3");
			line.setAttributeNS(null, "stroke-dashoffset", lineLength - 200);
		        break;
		    case "3":
		    $(".gradient1").fadeTo( "slow" , 0, function() {});
			$(".sterren").fadeTo( "slow" , 0, function() {});
			$("#sun").addClass("sun4");
			line.setAttributeNS(null, "stroke-dashoffset", lineLength - 260);
		        break;
		    case "4":
		    $(".gradient1").fadeTo( "slow" , 0.2, function() {});
	    	$(".sterren").fadeTo( "slow" , 0.2, function() {});
	    	$("#sun").addClass("sun5");
	    	line.setAttributeNS(null, "stroke-dashoffset", lineLength - 350);
		        break;
		    case "5":
		    $(".gradient1").fadeTo( "slow" , 0.4, function() {});
	    	$(".sterren").fadeTo( "slow" , 0.4, function() {});
	    	$("#sun").addClass("sun6");
	    	line.setAttributeNS(null, "stroke-dashoffset", lineLength - 430);
		        break;
		    case "6":
		    $(".gradient1").fadeTo( "slow" , 0.8, function() {});
	    	$(".sterren").fadeTo( "slow" , 0.8, function() {});
	    	$("#sun").addClass("sun7");
	    	line.setAttributeNS(null, "stroke-dashoffset", lineLength - 500);
		        break;
		    case "7":
		    $(".gradient1").fadeTo( "slow" , 1, function() {});
	    	$(".sterren").fadeTo( "slow" , 1, function() {});
	    	$("#sun").addClass("sun8");
	    	line.setAttributeNS(null, "stroke-dashoffset", 0);
		        break;
		}
	},
	render: function(){
		this.$el.html(this.template());
		return this;
	}
});

module.exports = SunsetView;