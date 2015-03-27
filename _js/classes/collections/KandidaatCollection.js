var Kandidaat = require('../models/Kandidaat.js');


var KandidaatCollection = Backbone.Collection.extend({


	model: Kandidaat,
	url: '/devine3/major4/projectComming/api/kandidaten',

	initialize: function(options){
		if(options){
			this.tag = options.tag;
		}
	},
	//sorteren van tweets, .sort oproepen voor je je tweets rendert
	comparator: function(Kandidaat) {
		return - Kandidaat.get("id");
	},

	sync: function(method, model, options) {
		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	},

	methodUrl: function(method){
		//if method === read; = checken als het een GET is! 
		if(method === "read" && this.tag){
			//feedback ophalen vna 1 specifieke student:
			this.url = "/2014_2015/twitter/api/tweets/tags/" + this.tag
			return;
		}
		this.url = '/devine3/major4/projectComming/api/kandidaten';

	},
});

module.exports = KandidaatCollection;