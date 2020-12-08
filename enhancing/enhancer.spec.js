const enhancer = require('./enhancer.js');
// test away!

describe('repair item', () => {
    it('returns item with 100 durability', () => {
        const testItem = {
            name: 'test sword',
            enhancement: 0,
            durability:0,
        }
        const expectedItem = {
            name: 'test sword',
            enhancement: 0,
            durability:100,
        }
        expect(enhancer(add(testItem))).toBe(expectedItem);
    })
})