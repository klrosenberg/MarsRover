const assert = require('assert');
import { formatPlateauLimitations, exploreMars } from './util';
import  { MarsRover } from './mars_rover';

describe('Mars Rover', () => {
    let rover;
    let rover2;

    beforeEach(() => {
        rover = new MarsRover(1, 2, 'N', 'LMLMLMLMM', [5,5]);
        rover2 = new MarsRover(3, 3, 'E', 'MMRMMRMRRM', [5,5]);
    });
    
    describe('#turnLeft()', () => {
        it('updates cardinal direction', () => {
            const leftTurn = rover.turnLeft();
            expect(rover.currentDirection).toEqual('W');
        });
    });

    describe('#turnRight()', () => {
        it('updates cardinal direction', () => {
            rover.turnRight();
            expect(rover.currentDirection).toEqual('E');
        });
    });

    describe('#moveForward()', () => {
        it('updates x, y coordinates', () => {
            rover.turnRight();
            expect(rover.currentDirection).toEqual('E');
        });
    });

    describe('#explore()', () => {
        it('returns the final coordinates and cardinal direction', () => {
            const finalPosition = rover.explore();
            const finalPosition2 = rover2.explore();
            expect(finalPosition).toEqual('1 3 N');
            expect(finalPosition2).toEqual('5 1 E');
        });
    });
});

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

    it('calls explore() once per rover', () => {
   
    });
});