Titanium.Broker = Titanium.Broker || (function() {
    var _trigger = Backbone.Events.trigger;

    var _brokers = {};

    return _.extend({
        key: '',

        get: function(key){
            if (!this.check(key)) {
                _brokers[key] = _.extend({'key': key}, Backbone.Events);
            }
            return _brokers[key];
        },

        check: function(key){
            return _brokers.hasOwnProperty(key);
        },

        trigger: function(vent) {
            if (vent !== null && !_.isEmpty(vent)) {
                return _trigger.apply(this, [].slice.call(arguments));
            }
            throw new Error('Trying to trigger undefined event');
        },

        Backbone.Events
    });
}());
