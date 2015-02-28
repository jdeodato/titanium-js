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
        },
        blanket: {
            exports: 'Blanket'
        }
    },
    paths: {
        underscore: 'vendor/underscore-min',
        backbone: 'vendor/backbone-min',
        jquery: 'vendor/jquery.min',
        text: 'vendor/text',
        qunit: 'test/libs/qunit-1.15.0',
        sinonjs: 'test/libs/sinon',
        sinonjsadapter: 'test/libs/sinon-qunit',
        helpersSpecs: 'test/qunit/specs/helpers/HelpersSpecs',
        brokerSpecs: 'test/qunit/specs/broker/BrokerSpecs',
        viewsSpecs: 'test/qunit/specs/view/ViewsSpecs',
        blanket: 'test/libs/blanket.min',

    }
});

require([
    'underscore',
    'jquery',
    'backbone',
    'qunit',
    'sinonjs',
    'blanket',
    'helpersSpecs',
    'brokerSpecs',
    'viewsSpecs'
], function(_, $, Backbone, QUnit, sinonjs) {

    var specs = _.union(HelpersSpecs, BrokerSpecs, ViewsSpecs);

    window.Titanium = {};

    var loadedModules = [];

    blanket.options('filter', [
        '../../src/'
    ]);

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
