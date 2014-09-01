Titanium.Router = Titanium.Router || Backbone.Router.extend({
	initialize: function(options){
		Backbone.Router.apply(this, arguments);
    	this._options = options || {};
    	this.setFacade();

    	return this;
	},

	setFacade: function(){
		if(this._options.facade === undefined){
			throw new Error('No facade set for router');
		}

		this._facade = this._options.facade;
		
		return this;
	},

	beforeRoute: function(){

	},

	afterRoute: function(){

	},

	processRoute: function(){

	},

	registerRoutes: function(){

	},

	
});