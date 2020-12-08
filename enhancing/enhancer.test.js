const enhancer = require('./enhancer.js');
// test away!

describe('enhance item - repair', () => {
    const testItem = {
        name: 'test sword',
        enhancement: 0,
        durability:0,
    }

    it('returns item with 100 durability', () => {
        const expectedItem = {
            name: 'test sword',
            enhancement: 0,
            durability:100,
        }
        expect(enhancer.repair(testItem)).toStrictEqual(expectedItem);
    })
});

describe('enhancer - sucess', () => {

    it ('returns enhanced item', () => {
        const testItem1 = {
            name: 'test sword',
            enhancement: 0,
            durability:0,
        }
        const expectedItem = {
            name: 'test sword',
            enhancement: 1,
            durability:0,
        } ;       
        expect(enhancer.success(testItem1)).toStrictEqual(expectedItem);
        
    })

    it ('doesnt enhance item over 20', () => {
        const testItem2 = {
            name: 'test sword',
            enhancement: 20,
            durability:0,
        };
        const expectedItem = {
            name: 'test sword',
            enhancement: 20,
            durability:0,
        };       
        expect(enhancer.success(testItem2)).toStrictEqual(expectedItem);

    })
})