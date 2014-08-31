define([
        'src/titanium.helpers'
    ],
    function() {
        "use strict";

        return function(){

            module("Titanium Helpers", {
                setup: function() {
                    
                },
                teardown: function() {
                    
                }
            });

            test('UUID generated', function() {
                expect(1);

                var uid = Titanium.Helpers.generateUUID();

                notEqual(uid, undefined, 'UUID generated.');
            });

            test('validate UUID', function() {
                expect(4);

                var UUID = '34d7cfc5-95c5-4d40-afb5-1479b6977b34';

                var invalid = Titanium.Helpers.parseUUID('');
                var onlyUUID = Titanium.Helpers.parseUUID('34d7cfc5-95c5-4d40-afb5-1479b6977b34');
                var UUIDinText = Titanium.Helpers.parseUUID('should parse this UUID 34d7cfc5-95c5-4d40-afb5-1479b6977b34 from the string');
                var noUUIDinText = Titanium.Helpers.parseUUID('should parse this string and return 0 results');

                equal(invalid, false, 'For an empty string, no UUID is returned.');
                equal(onlyUUID, UUID, 'String with only a UUID.');
                equal(UUIDinText, UUID, 'For a string that contains a UUID, the UUID is returned.');
                equal(noUUIDinText, false, 'For an string with no UUID, no UUID is returned.');

            });

            test('return UTC format string', function() {
                expect(1);

                equal(Titanium.Helpers.getUTCFormat(), 'YYYY-MM-DDTHH:mm:ss', 'Correct format returned');
            });
        };
    }
);
