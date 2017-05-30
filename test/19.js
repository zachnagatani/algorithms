const expect = require('chai').expect;
let solution = require('../solutions/19').solution;
//solution = require('../yourSolution').solution;

describe('Array pairs that sum to x', () => {
    it('should return an array of pairs of integers whose sum equal to x', () => {
        const result = solution([1,2,3,4,5,6], 6);
        expect(result).to.deep.equal([[1,5], [2,4]]);

        const result2 = solution([2,1,3,4,5,6], 6);
        expect(result).to.deep.equal([[1,5], [2,4]]);
    });

    it('should only use an integer once in its output', () => {
        const result = solution([1,3,3,3], 4);
        expect(result).to.deep.equal([[1,3]]);
    });

    it('should return null of no pairs are found', () => {
        const result = solution([1,2,3,4,5,6], 40);
        expect(result).to.equal(null);
    });
});
