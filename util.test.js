const assert = require('assert');
import { formatPlateauLimitations, exploreMars } from './util';
import  MarsRover from './mars_rover';
jest.mock('./mars_rover');

describe('#formatPlateauLimitations()', () => {
    it('returns plateau limitations as array of x, y coordinates (integers)', () => {
        const plateauLimitations = formatPlateauLimitations('5 5');
        expect(plateauLimitations).toEqual([5,5]);
    });
});

describe('#exploreMars()', () => {
    const explorationInformation = 
        `5 5
        1 2 N
        LMLMLMLMM
        3 3 E
        MMRMMRMRRM`;

    beforeEach(() => {
        MarsRover.mockClear();
    });

    it('calls explore() once per rover', () => {
        exploreMars(explorationInformation);
        expect(MarsRover.mock.instances.length).toEqual(2);
        expect(MarsRover.mock.instances[0].explore).toHaveBeenCalled();
        expect(MarsRover.mock.instances[1].explore).toHaveBeenCalled();
    });
});