define([
        'src/titanium.broker',
        'src/titanium.view'
    ],
    function() {
        "use strict";

        return function(){

            var sandbox;

            module("Titanium Broker", {
                setup: function() {
                    sandbox = sinon.sandbox.create();
                },
                teardown: function() {
                    sandbox.restore();
                }
            });

            test('Create and destroy brokers', function() {
                expect(5);

                var tbroker = Titanium.Broker.get('b1');
                var abroker = Titanium.Broker.get('a1');

                notEqual(tbroker, undefined, 'Broker one set');
                notEqual(abroker, undefined, 'Broker two set');
                notEqual(tbroker, abroker, 'Brokers are not the same');

                Titanium.Broker.clear('a1');

                var a1 = Titanium.Broker.check('a1');

                equal(a1, false, 'Deleted a broker');

                Titanium.Broker.clear();

                equal(Titanium.Broker.size(), 0, 'All brokers cleared');
            });

            test('Trigger broker events', function() {
                expect(2);

                var vent = 'vent:brokers';

                var tbroker = Titanium.Broker.get('test');
                var abroker = Titanium.Broker.get('another');

                var simple = {
                    callback1: function(){
                        return 1;
                    }
                };

                var simple2 = {
                    callback2: function(){
                        return 2;
                    }
                };

                _.extend(simple, Backbone.Events);
                _.extend(simple2, Backbone.Events);

                var spy1 = sinon.spy(simple, 'callback1');
                simple.listenTo(tbroker, vent, simple.callback1);

                var spy2 = sinon.spy(simple2, 'callback2');
                simple2.listenTo(abroker, vent, simple2.callback2);

                tbroker.trigger(vent);

                equal(spy1.calledOnce, true,'Triggered event called once');
                equal(spy2.notCalled, true,'Triggered event didn\'t called the other broker');

            });

            test('Trigger broker events between views', function() {
                expect(1);

                var vent = 'vent:fromAnotherView';

                var view1 = new Titanium.View();
                var view2 = new Titanium.View();

                view1.broker = Titanium.Broker.get('views');
                view2.broker = Titanium.Broker.get('views');

                var view1Spy = sinon.spy(view1, 'dispose');

                view1.listenTo(view1.broker, vent, view1.dispose);

                view2.broker.trigger(vent);

                equal(view1Spy.calledOnce, true,'View 2 event triggered and called on view 1');

                view2.dispose();
            });
        };
    }
);
