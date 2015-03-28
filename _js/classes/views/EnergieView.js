var template = require('../../../_hbs/energie.hbs');

var EnergieView = Backbone.View.extend({
	template: template,
	
	events: {
		//'click .showtutorial': 'changeLink'
	},
	changeLink: function(e){
		e.preventDefault();
		window.location.href = '#tutorial';
	},
	initialize: function(){

	},
	removeSelf: function(){
		setInterval(function(){this.remove()}.bind(this), 1000);
	},
	renderInteraction: function(){
		//this.s = Snap(".svgout");
	},
	render: function(){
		this.$el.html(this.template());
		//this.$tweets = this.$el.find('.tweets');
		return this;

	}

});

module.exports = EnergieView;