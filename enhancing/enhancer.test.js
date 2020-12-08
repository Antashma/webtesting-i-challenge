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
        const testItem = {
            name: 'test sword',
            enhancement: 0,
            durability:0,
        }
        const expectedItem = {
            name: 'test sword',
            enhancement: 1,
            durability:0,
        } ;       
        expect(enhancer.success(testItem)).toStrictEqual(expectedItem);
        
    })

    it ('doesnt enhance item over 20', () => {
        const testItem = {
            name: 'test sword',
            enhancement: 20,
            durability:0,
        };
        const expectedItem = {
            name: 'test sword',
            enhancement: 20,
            durability:0,
        };       
        expect(enhancer.success(testItem)).toStrictEqual(expectedItem);
    });

    it ('does not change durability', () => {
        const testItem = {
            name: 'test sword',
            enhancement: 10,
            durability:10,
        };
        const expectedItem = {
            name: 'test sword',
            enhancement: 11,
            durability:10,
        };
        expect(enhancer.success(testItem)).toStrictEqual(expectedItem);
    })
});

describe('enhance - fail', () => {
    it('decreases item durability by 5 when enhancement is <15', () => {
        const testItem = {
            name: 'lucky amulet',
            enhancement: 13,
            durability: 6,
        }
        expect(enhancer.fail({...testItem})).toStrictEqual({
            ...testItem,
            durability: testItem.durability - 5
        });
    })
})