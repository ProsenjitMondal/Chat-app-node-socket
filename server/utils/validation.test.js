const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        let nonString = isRealString(10);
        expect(nonString).toBeFalsy();
    });

    it('should reject string with only spaces', () => {
        let onlySpace = isRealString('    ');
        expect(onlySpace).toBeFalsy();
    });

    it('should allow string with non-space characters', () => {
        let realString = isRealString(' Prosenjit Mondal ');
        expect(realString).toBeTruthy();
    });
});