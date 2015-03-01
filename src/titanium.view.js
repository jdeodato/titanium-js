Titanium.View = Titanium.View || Backbone.View.extend({
    initialize: function(options) {
        this._subviews = {};

        this.overrideRenderMethod();
        this.initializeView(options);
        this.setListeners();

        return this;
    },

    initializeView: function(options) {
        //should be implemented on concrete classes
        return this;
    },

    setListeners: function() {
        //should be implemented on concrete classes
        return this;
    },    

    addClass: function(klass, reset){
        if(_.isEmpty(klass)){
            return;
        }

        if(reset === true){
            this.$el.removeAttr('class');
        }

        this.$el.addClass(klass);

        return this;
    },

    dispose: function() {
        if (this.isDisposed) {
            return;
        }

        if (this.onDispose) {
            this.onDispose();
        }

        this.isDisposed = true;

        this.disposeSubviews();
        this.$el.empty();
        this.stopListening();
        this.unbind();
        this.remove();
    },

    onDispose: function() {
        //should be implemented on concrete classes
        return this;
    },

    getSubviews: function() {
        if (!this._subviews) {
            this._subviews = {};
        }

        return this._subviews;
    },

    addSubview: function(view) {
        if (view) {
            var viewCid = view.cid;
            this._subviews[viewCid] = view;
        }

        return this;
    },

    getSubviewByCid: function(cid) {
        if (cid) {
            return this._subviews[cid];
        }
    },

    disposeSubviews: function() {
        for (var k in this._subviews) {
            if (this._subviews[k]) {
                view.dispose();
                delete this._subviews[k];
            }
        }

        this._subviews = {};

        return this;
    },

    overrideRenderMethod: function() {
        this.render = _.wrap(this.render, function(render) {
            this.beforeRender();
            render.apply(this);
            this.afterRender();

            return this;
        });

        return this;
    },

    beforeRender: function() {
        //should be implemented on concrete classes
        return this;
    },

    afterRender: function() {
        //should be implemented on concrete classes
        return this;
    },

    serialize: function(data){
        //should be implemented on concrete classes
        //used to prepare data for template
    }
});
