const {tokenize} = require('./tokenize');

describe('tokenize', () => {
    it.each([
        ['1+3*5', ['1', '+', '3', '*', '5']],
        ['1 + 3 * 5', ['1', '+', '3', '*', '5']],
        ['1 + 3 * 5 - 6 / 3', ['1', '+', '3', '*', '5', '-', '6', '/', '3']],
        ['11 + 31 * 5 - 600 / 100', ['11', '+', '31', '*', '5', '-', '600', '/', '100']],
    ])('should tokenize %s', (expression, expectedTokens) => {
        expect(tokenize(expression)).toEqual(expectedTokens);
    });
});
