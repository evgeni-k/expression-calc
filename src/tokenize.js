const {isOperator} = require(`./operators`);

function tokenize(expression) {
    const tokens = [];
    let currentOperand = '';
    for (let i = 0; i < expression.length; i++) {
        const el = expression.charAt(i);
        if (el === ' ') {
            continue;
        }

        if (isOperator(el)) {
            if (currentOperand) {
                tokens.push(currentOperand);
                currentOperand = '';
            }
            tokens.push(el);
        } else {
            if (el >= '0' && el <= '9') {
                currentOperand = `${currentOperand}${el}`;
            } else {
                throw new Error(`invalid value ${currentOperand}`);
            }
        }
    }

    if (currentOperand) {
        tokens.push(currentOperand);
    }

    return tokens;
}

module.exports = {
    tokenize,
};
