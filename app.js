/* 
Make a function that will take an array as a parameter and a single integer n.
Each element in the array will be divided by n. Get each element factorial number in the array. Find out the largest number. 

Input Format: [1, 4, 7, 16 ] , 4

Output Format: 24

*/

const findLargest = (array, n) => {

    if (array.length < 1) return;

    const arrayAfterDivider = array.map(element => (Math.round(element / n)));

    const factorial = arrayAfterDivider.map(number => {

        const result = fact(number);
        function fact(n) {
            if (n < 0) return;
            if (n < 2) return 1;
            return n * fact(n - 1);
        }
        return result;
    });

    const largestNumber = Math.max(...factorial);

    return largestNumber;

};

const find = findLargest([1, 4, 7, 16], 4);

console.log("Largest Number is: ", find);
