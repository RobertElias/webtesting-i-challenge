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

    describe(".succeed()", function() {
        // arrange --> setup the world
        // act --> execute the code we're testing
        // assert --> check our assumptions
        it("should raise the enhancements by 1", function() {
            const item = {
                name: "Iron Sword",
                durability: 23,
                enhancement: 15
            };
            const expected = {
                name: "Iron Sword",
                durability: 100,
                enhancement: 16
            }
            const enhanceItem = succeed(item);
            expect(enhanceItem).toEqual(expected); // assertion
        });
    })
    
    describe(".fail()", function() {
        // arrange --> setup the world
        // act --> execute the code we're testing
        // assert --> check our assumptions
        //If the item's enhancement is less than 15, the durability of the item is decreased by 5.
        it("should decrease the durability by 5 if less than 15", function() {
            const item = {
                name: "Iron Sword",
                durability: 50,
                enhancement: 11
            };
            const expected = {
                name: "Iron Sword",
                durability: 45,
                enhancement: 11
            }
            const failItem = fail(item);
            expect(failItem).toEqual(expected); // assertion
            //expect(failItem).toBe(false); //fails
        });
         //  If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
         it("should decrease durability by 10 if greater than 14", () => {
            const item = {
                name: "Iron Sword",
                durability: 50,
                enhancement: 16
            };

            const expected = {
                name: "Iron Sword",
                durability: 40,
                enhancement: 16
            };

            const failItem = fail(item);
            expect(failItem).toEqual(expected);
        });