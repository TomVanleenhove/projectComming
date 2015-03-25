var template = require('../../../_hbs/tweet.hbs');

var KandidaatView = Backbone.View.extend({

	template: template,

	tagName: 'li',

	events: {
		'click .delete': 'clickDelete',
	},

	clickDelete: function(e){
			e.preventDefault();
			this.model.destroy();
	},

	initialize: function(){
			//view verwijderen:
			this.listenTo(this.model, 'destroy', this.remove);
	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}


});

module.exports = KandidaatView;