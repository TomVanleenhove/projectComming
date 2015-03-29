var template = require('../../../_hbs/group.hbs');

var GroupView = Backbone.View.extend({
	template: template,
	tagName: "article",
	id: "containerwachtrij",

	events: {
		//'click .showtutorial': 'changeLink'
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

module.exports = GroupView;