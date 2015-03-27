var template = require('../../../_hbs/intro.hbs');

var HomeView = Backbone.View.extend({

	tagName: "article",
	id: "containerbig1",
	template: template,
	
	events: {
		'click .showtutorial': 'changeLink'
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
	render: function(){
		this.$el.html(this.template());
		//this.$tweets = this.$el.find('.tweets');

		return this;

	}

});

module.exports = HomeView;