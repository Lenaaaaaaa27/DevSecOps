// math.test.js
const { minus } = require('./minus');

test('12 - 2 = 10', () => {
    expect(minus(12, 2)).toBe(10);
});
