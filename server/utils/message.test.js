const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generate Message', () => {
    it('should generate the correct message object', () => {
        var res = generateMessage('mike', 'this is a test');
        expect(res.from).toBe('mike');
        expect(res.text).toBe('this is a test');
        expect(typeof res.createdAt).toBe('number');
    })
})

describe('generate location message', () => {
    it('should generate correct location', () => {
        var from = "Deb";
        var lat = 15;
        var lng = 19;
        var url = `https://www.google.com/maps?q=15,19`
        
        var message = generateLocationMessage('user', lat, lng);

        expect(typeof message.createdAt).toBe('number');
        expect(message.url).toBe(url);
    })
})