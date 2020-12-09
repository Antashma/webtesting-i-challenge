const enhancer = require('./enhancer.js');
// test away!

const testItem1 = {
    name: 'old shield',
    enhancement: 13,
    durability: 0,
}
const testItem2 = {
    name: 'wooden sword',
    enhancement: 18,
    durability: 20,
}
const testItem3 = {
    name: 'lucky amulet',
    enhancement: 20,
    durability: 0,
}

const brokenItem = {
    name: 'stick',
    durability: 13,
}

describe('item to be enhanced', () => {
    it('has name, durability, and enhancement properties', () => {
        expect(testItem1).toHaveProperty('enhancement');
        expect(testItem1).toHaveProperty('durability');
        expect(testItem1).toHaveProperty('name');
    })
})

describe('enhance item - repair', () => {
    it('returns item with 100 durability', () => {
        expect(enhancer.repair({...testItem1}).durability).toStrictEqual(100);
        expect(enhancer.repair({...testItem2}).durability).toStrictEqual(100);
        expect(enhancer.repair({...testItem3}).durability).toStrictEqual(100);
    })
});

describe('enhancer - sucess', () => {

    it('returns enhanced item', () => {

        expect(enhancer.success({...testItem1}).enhancement).toStrictEqual(testItem1.enhancement + 1);
        expect(enhancer.success({...testItem2}).enhancement).toStrictEqual(testItem2.enhancement + 1);
        expect(enhancer.success({...testItem3}).enhancement).not.toStrictEqual(testItem3.enhancement + 1);
        
    })

    it ('doesnt enhance item over 20', () => {       
        expect(enhancer.success({...testItem3}).enhancement).toStrictEqual(testItem3.enhancement);
    });

    it ('does not change durability', () => {
        expect(enhancer.success({...testItem1}).durability).toStrictEqual(testItem1.durability);
        expect(enhancer.success({...testItem2}).durability).toBe(testItem2.durability);
        expect(enhancer.success({...testItem3}).durability).toStrictEqual(testItem3.durability)})
});

describe('enhance - fail', () => {

    it('decreases item durability by 5 when enhancement is <15', () => {
        
        expect(enhancer.fail({...testItem1}).durability).not.toBe(testItem1.durability - 5);
        expect(enhancer.fail({...testItem2}).durability).not.toBe(testItem2.durability - 5);
        expect(enhancer.fail({...testItem3}).durability).not.toBe(testItem3.durability - 5);
    })

    it('decreases item durability by 10 when enhancement is >= 15', () => {

        expect(enhancer.fail({...testItem1}).durability).not.toBe(testItem1.durability - 10);
        expect(enhancer.fail({...testItem2}).durability).toBe(testItem2.durability - 10);
        expect(enhancer.fail({...testItem3}).durability).not.toBe(testItem3.durability - 10);    });

    it('decreases item enhancement by 1 when enhancement is > 16', () => {

        //console.log(enhancer.fail({...testItem}));
        expect(enhancer.fail({...testItem1}).enhancement).not.toBe(testItem1.enhancement - 1);
        expect(enhancer.fail({...testItem2}).enhancement).toBe(testItem2.enhancement - 1);
        expect(enhancer.fail({...testItem3}).enhancement).toBe(testItem3.enhancement - 1);
    })
})