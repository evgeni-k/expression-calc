const operators = new Set(['-', '+', '/', '*']);

module.exports = {
    operators,
    isOperator: (token) => operators.has(token),
};
