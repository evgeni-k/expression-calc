const {isOperator} = require(`operators`);

function createTreeNode() {
    let left;
    let right;
    let value;

    return {
        left,
        right,
        value,
    }
}

function buildTree(tokens) {
    let currentNode = createTreeNode();
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (isOperator(token)) {
            currentNode.value = token;
        } else {
            if (!currentNode.left) {
                currentNode.left = token;
            } else {
                currentNode.right = token;
            }
        }

        if (isOperator(token)) {
            if (!currentNode.value) {
                currentNode.value = token;
            }
        } else {
            currentNode.left = token;
        }
    }
}
