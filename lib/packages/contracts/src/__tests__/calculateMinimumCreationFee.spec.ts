import {calculateMinimumCreationFee} from '../calculateMinimumCreationFee';

describe('calculateMinimumCreationFee', () => {
    it('calculates minimum contract fee in planck', () => {
        expect(calculateMinimumCreationFee('xx'.repeat(513)).getBurst()).toBe('6');
        expect(calculateMinimumCreationFee('xx'.repeat(300)).getBurst()).toBe('5');
        expect(calculateMinimumCreationFee('xx'.repeat(1)).getBurst()).toBe('4');
    });
});
