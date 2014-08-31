Titanium.Helpers = Titanium.Helpers || function() {

    return {
        generateUUID: function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0,
                    v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },

        parseUUID: function(uuid) {
            if (!_.isString(uuid) || _.isEmpty(uuid)) {
                return false;
            }

            var result = uuid.match(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/);

            if(!result || result.length === 0){
                return false;
            }

            return result[0];
        },

        getUTCFormat: function() {
            return 'YYYY-MM-DDTHH:mm:ss';
        }
    }
}();
