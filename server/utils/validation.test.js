var expect = require('expect');
const {isRealString} = require('./validation');

describe('is real string', () => {
    it('should reject non-string values', (done) => {
        var num = 123;
        expect(isRealString(num)).toBe(false)
        done()
    })
    it('should reject strings with only spaces', (done) => {
        var falseString = '          ';
        expect(isRealString(falseString)).toBe(false)
        done()
    })
    it('should allow strings with non-spaces characteres', (done) => {
        var falseString = ' the lord of the rings';
        expect(isRealString(falseString)).toBe(true);
        done()  
    })
});