const add = (a,b)=> a + b;

test('should add 2 numbers', ()=> {
    const result = add(2,3);
    expect(result).toBe(7);
})
