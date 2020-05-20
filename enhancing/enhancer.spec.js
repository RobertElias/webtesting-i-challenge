const enhancer = require('./enhancer.js');
// test away!
describe("enhancer.js", function() {
    describe(".repair()", function() {
        // arrange --> setup the world
        // act --> execute the code we're testing
        // assert --> check our assumptions
        it("should return item & change durability to 100", function() {
            const item = {
                name: "Iron Sword",
                durability: 23,
                enhancement: 15
            };
            const expected = {
                name: "Iron Sword",
                durability: 100,
                enhancement: 15
            }
            const repairItem = repair(item);
            expect(repairItem).toEqual(expected); // assertion
        });
    });