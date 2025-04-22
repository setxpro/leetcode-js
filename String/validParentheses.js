// 20 - Valid Parentheses

var isValid = function(s) {

    // Initialize an empty stack
    let stack = [];

    //  Loop through each character in the string
    for (let i = 0; i < s.length; i++) {

        // Get the current character
        let char = s[i];

        // If the current character is an opening bracket, push it to the stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            // If the current character is a closing bracket, pop the top of the stack
            let preVal = stack.pop();

            // If the current character is a closing bracket and the top of the stack is not the corresponding opening bracket, return false
            if ((preVal === '(' && char !== ')') || (preVal === '[' && char !== ']') || (preVal === '{' && char !== '}')) {
                return false;
            }

        }
    }

    // If the stack is empty, return true
    return stack.length === 0;
}

console.log(isValid.call(null, "()[]{}"));