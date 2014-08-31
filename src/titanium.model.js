Titanium.Model = Titanium.Model || Backbone.Model.extend({
	initialize: function(options){
		this.setDefaults();
		this.initializeModel(options);
		return this;
	},

	initializeModel: function(options){
		//should be implemented on extended classes
		return this;
	},

	getID: function(){
		return this.get('id');
	},

	reset: function(){
		this.clear().setDefaults();
		return this;
	},

	setDefaults: function(options){
		//should be implemented on extended classes
		return this;
	}

});