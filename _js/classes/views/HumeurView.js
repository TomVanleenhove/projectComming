var template = require('../../../_hbs/humeur.hbs');

var HumeurView = Backbone.View.extend({
	template: template,
	tagName: "article",
	id: "humeur",
	className: "stemming",
	
	events: {
		'click #refreshBtn': 'refresh'
	},
	changeLink: function(e){
		e.preventDefault();
		window.location.href = '#tutorial';
	},
	initialize: function(){

	},
	refresh: function(e){
		e.preventDefault();
		this.s.select("g#lap0").animate({"opacity": 1}, 200);
		this.s.select("g#lap1").animate({"opacity": 0}, 200);
		this.s.select("g#lap2").animate({"opacity": 0}, 200);
		this.s.select("g#lap3").animate({"opacity": 0}, 200);
		this.s.select("g#lap4").animate({"opacity": 0}, 200);
		this.currentSlap = 0;
	},
	removeSelf: function(){
		setInterval(function(){this.remove()}.bind(this), 1000);
	},
	renderInteraction: function(){
		console.log("rendering interaction");
		this.s = Snap(".svgout");
		this.interaction = Snap.load("assets/images/humeur.svg", function(loadedFragment){
			this.s.append(loadedFragment.select("#humeur"));
			var m = new Snap.Matrix(0.4,0,0,0.4,0,-40);
			this.s.select("#humeur").transform(m);
			m.e = 149 - (this.s.select("#humeur").getBBox().width / 2);
			this.s.select("#humeur").transform(m);
			this.rendersvg();
		}.bind(this));
	},
	rendersvg: function(){
		this.s.select("g#lap1").attr("opacity", 0);
		this.s.select("g#lap2").attr("opacity", 0);
		this.s.select("g#lap3").attr("opacity", 0);
		this.s.select("g#lap4").attr("opacity", 0);
		this.s.select("g#swipe").attr("opacity", 0);
		this.s.select("g#mot").attr("opacity", 0);
		var el = document.getElementsByClassName('svgout')[0];
		this.currentSlap = 0;
		this.isSwiping = false;
		this.s.touchmove(function(e){
			this.isSwiping = true;
		});
		this.s.touchstart(function(e){
			var m = new Snap.Matrix();
			m.e = e.touches[0].clientX - (154);
			m.f = (e.touches[0].clientY - (135))- (this.s.select("g#mot").getBBox().width/2);
			this.s.select("g#mot").attr("opacity", 1);
			this.s.select("g#mot").transform(m);
			setInterval(function(){this.s.select("g#mot").attr("opacity", 0);}.bind(this), 300);
			switch(this.currentSlap){
   			case 0:
		        this.s.select("g#lap0").animate({ 'opacity' : 0 }, 100);
		        this.s.select("g#lap1").animate({ 'opacity' : 1 }, 100);
		        break;
		    case 1:
		        this.s.select("g#lap1").animate({ 'opacity' : 0 }, 100);
		        this.s.select("g#lap2").animate({ 'opacity' : 1 }, 100);
		        break;
		    case 2:
		        this.s.select("g#lap2").animate({ 'opacity' : 0 }, 100);
		        this.s.select("g#lap3").animate({ 'opacity' : 1 }, 100);
		        break;
		    case 3:
		        this.s.select("g#lap3").animate({ 'opacity' : 0 }, 100);
		        this.s.select("g#lap4").animate({ 'opacity' : 1 }, 100);
		        break;
		    }
		    if (this.currentSlap < 5) {
		    	this.currentSlap ++;
		    	console.log("slap!");
		    };
		}.bind(this));
	},
	render: function(){
		this.$el.html(this.template());
		//this.$tweets = this.$el.find('.tweets');
		return this;

	}

});

module.exports = HumeurView;