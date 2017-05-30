// Find pairs that sum to x
// Return array of pairs from an input array of numbers that adds up to second input x. Each number can be used only once.
// input: [1,2,3,4,5], 6
// output: [[1,5], [2,4]]

// Solution by Zach Nagatani @zachnagatani

/**
 * Returns an multidimensional array containing pairs of numbers from an passed in array which add up to the passed in sum
 * Each integer can only be used to form one pair
 * @param {number[]} arr - An array of numbers to search through
 * @param {number} sum - The sum to use as the basis of the search
 * @returns {number[][]} pairs - A multidimensional array of pairs that add up to the sum
 */
const solution = (arr, sum) => {
    let unusedNums = arr.slice(),
        pairs = [],
        head = 0,
        tail = unusedNums.length - 1;

    while (head < tail) {
        let currentSum = unusedNums[head] + unusedNums[tail];

        if (currentSum === sum) {
            pairs.push([unusedNums[head], unusedNums[tail]]);
            unusedNums.splice(head, 1);
            unusedNums.splice(tail, 1);

            head = 0;
            tail = unusedNums.length - 1;
        } else if (currentSum < sum) {
            head++;
        } else {
            tail--;
        }
    }

    return pairs.length ? pairs : null;
};

module.exports = {
    solution
};
