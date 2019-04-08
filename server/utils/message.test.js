const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Prosenjit';
        let text = 'Hello Everyone';
        let message = generateMessage(from, text);
        
        // expect(message.from).toBe(from);
        // expect(message.text).toBe(text);
        expect(message).toMatchObject({from, text});
        expect(typeof message.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = 'Admin';
        let latitude = 1;
        let longitude = 1;
        let url = 'https://www.google.com/maps/?q=1,1';

        var message = generateLocationMessage(from, latitude, longitude);

        expect(message).toMatchObject({from, url});
        expect(typeof message.createdAt).toBe('number');
    });
});
