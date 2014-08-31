require.config({
    baseUrl: '../../.',

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'jquery',
                'underscore'
            ],
            exports: 'Backbone'
        },
        qunit: {
            exports: 'QUnit',
            init: function() {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        }
    },
    paths: {
        underscore: 'vendor/underscore',
        backbone: 'vendor/backbone',
        jquery: 'vendor/jquery',
        text: 'vendor/text',
        qunit: 'test/libs/qunit-1.15.0',
        sinonjs: 'test/libs/sinon',
        sinonjsadapter: 'test/libs/sinon-qunit',
        helpersSpecs: 'test/qunit/specs/helpers/HelpersSpecs'

    }
});

require([
    'underscore',
    'jquery',
    'backbone',
    'qunit',
    'sinonjs',
    'helpersSpecs'
], function(_, $, Backbone, QUnit, sinonjs) {

    var specs = _.union(HelpersSpecs);

    window.Titanium = {};

    var loadedModules = [];

    function runTests() {
        if (loadedModules.length === specs.length) {
            _.each(loadedModules, function(test) {
                test();
            });
            window.server = sinon.fakeServer.create();

            QUnit.config.reorder = false;
            QUnit.load();
            QUnit.start();
        }
    }
    _.each(specs, function(string) {
        require([string], function(a) {
            loadedModules.push(a);
            runTests();
        });
    });

});
