var template = require('../../../_hbs/hygiene.hbs');

var HygieneView = Backbone.View.extend({
	template: template,
	tagName: "article",
	id: "hygiene",
	className: "stemming",
	events: {
		'click #refreshBtn': 'refresh'
	},
	changeLink: function(e){
		e.preventDefault();
		window.location.href = '#tutorial';
	},
	initialize: function(){
		var myShakeEvent = new Shake({
    		threshold: 15, // optional shake strength threshold
    		timeout: 1500 // optional, determines the frequency of event generation
		});
		myShakeEvent.start();
	},
	refresh: function(e){
		e.preventDefault();
		this.s.select("g#stap_1").animate({"opacity": 1}, 200);
		this.s.select("g#stap_2").animate({"opacity": 0}, 200);
		this.s.select("g#stap_3").animate({"opacity": 0}, 200);
		this.s.select("g#stap_4").animate({"opacity": 0}, 200);
		this.s.select("g#stap_5").animate({"opacity": 0}, 200);
		this.currentStep = 0;
	},
	removeSelf: function(){
		setInterval(function(){this.remove()}.bind(this), 1000);
	},
	renderInteraction: function(){
		this.s = Snap(".svgout");
		this.interaction = Snap.load("assets/images/hygiene.svg", function(loadedFragment){
			this.s.append(loadedFragment.select("#hygiene"));
			var m = new Snap.Matrix(0.5,0,0,0.5,0,-40);
			this.s.select("#hygiene").transform(m);
			m.e = 158 - (this.s.select("#hygiene").getBBox().width / 2);
			this.s.select("#hygiene").transform(m);
			this.rendersvg();
		}.bind(this));
	},
	rendersvg: function(){
		this.currentStep = 1;
		window.addEventListener('shake', function(){
			switch(this.currentStep){
	   			case 1:
			        this.s.select("g#stap_1").animate({ 'opacity' : 0 }, 100);
			        this.s.select("g#stap_2").animate({ 'opacity' : 1 }, 100);
			        break;
			    case 2:
			        this.s.select("g#stap_2").animate({ 'opacity' : 0 }, 100);
			        this.s.select("g#stap_3").animate({ 'opacity' : 1 }, 100);
			        break;
			    case 3:
			        this.s.select("g#stap_3").animate({ 'opacity' : 0 }, 100);
			        this.s.select("g#stap_4").animate({ 'opacity' : 1 }, 100);
			        break;
			    case 4:
			        this.s.select("g#stap_4").animate({ 'opacity' : 0 }, 100);
			        this.s.select("g#stap_5").animate({ 'opacity' : 1 }, 100);
			        break;
		    }
		    if (this.currentStep < 5) {
		    	this.currentStep ++;
		    };
		}.bind(this), false);
		this.s.select("g#stap_2").attr("opacity", 0);
		this.s.select("g#stap_3").attr("opacity", 0);
		this.s.select("g#stap_4").attr("opacity", 0);
		this.s.select("g#stap_5").attr("opacity", 0);
	},
	render: function(){
		this.$el.html(this.template());
		return this;
	}

});

module.exports = HygieneView;