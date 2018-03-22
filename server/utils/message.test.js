const expect = require('expect');

var {generateMessage} = require('./message');

describe('generate Message', () => {
    it('should generate the correct message object', () => {
        var res = generateMessage('mike', 'this is a test');
        expect(res.from).toBe('mike');
        expect(res.text).toBe('this is a test');
        expect(typeof res.createdAt).toBe('number');
    })
})