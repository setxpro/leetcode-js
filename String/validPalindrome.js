// 125. Valid Palindrome

var isPalindrome = function(s) {

    // Remove non-alphanumeric characters and convert to lowercase
    const letters = s.match(/[a-zA-Z0-9]/g);

    const normalizedStr = letters.join("").toLowerCase();

    let left = 0;
    let right = normalizedStr.length - 1;

    while (left < right) {
        if (normalizedStr[left] !== normalizedStr[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome.call(null, "A man, a plan, a canal: Panama"));