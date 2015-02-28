define([
        'src/titanium.view'
    ],
    function() {
        "use strict";

        return function(){

            var sandbox;

            module("Titanium View", {
                setup: function() {
                    sandbox = sinon.sandbox.create();
                },
                teardown: function() {
                    sandbox.restore();
                }
            });

            test('Extend titanium view and test view methods', function() {
                expect(1);

                var expectedInstanceOf = 'ExtendedView';

                var ExtendedView = Titanium.View.extend({
                    instanceOf: expectedInstanceOf
                });

                var instance = new ExtendedView();

                equal(instance.instanceOf, expectedInstanceOf, 'New view has correct type');

                instance.dispose();

            });
        };
    }
);
