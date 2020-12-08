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
})

describe('enhancer - sucess', () => {
    const testItem = {
        name: 'test sword',
        enhancement: 0,
        durability:0,
    }
    it ('returns enhanced item', () => {
        const expectedItem = {
            name: 'test sword',
            enhancement: 1,
            durability:0,
        } ;       
        expect(enhancer.success(testItem)).toStrictEqual(expectedItem)
    })
})