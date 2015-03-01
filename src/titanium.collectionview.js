Titanium.CollectionView = Titanium.CollectionView || Titanium.View.extend({

	//show loading on load items
	loading: true,

	//render when initializing view
	renderOnInit: true,

	//render items automatically
	propagateRender: false,

	contructor: function(options){
		if(options && !options.itemView){
			throw new Error('You need to define an itemview');
		}

		!options && options = {};

		this.itemView = options.itemview;
		Titanium.View.apply(this, arguments);
		this._startItemCache();
		this._setListeners(options);
		this._startRenderProcess(options);
	},

	//internal methods
	
	_setListeners: function(options){
		if(!options.broker){
			return;
		}
	},

	_startRenderProcess: function(options){
		options.renderOnInit !== undefined && this.renderOnInit = options.renderOnInit;

		if(this.renderOnInit === true){
			this.render();
		}
	},

	_startItemCache: function(){
		this._itemCache = [];
	},

	_clearItemCache: function(){
		this._itemCache.length = 0;
	},

	_insertItemBefore: function(item, index, position){

	},

	_removeItemAt: function(position, index){

	},

	_appendTo: function(items){
		if(!items){ return; }

		this.$el.append(items);
	},

	//public methods

	renderItems: function(collection){

	},

	resetItems: function(){

	},

	insertItemAt: function(item, index, refresh){

	},

	toggleItem: function(selector, item, index){

	},

	filterItems: function(selector){

	}

});