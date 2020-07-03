const assert = require('assert');
import { formatPlateauLimitations, exploreMars } from './util';
import  MarsRover from './mars_rover';

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

    describe('#startingPositionCheck()', () => {
        it('throws an error if rover is outside of the plateau boundries', () => {
            const rover3 = new MarsRover(1, 6, 'N', 'RM', [5,5]);
            expect(() => rover3.explore()).toThrowError('Cannot send rover that is outside the plateau boundries.');
        });
    });

    describe('#startingDirectionCheck()', () => {
        it('throws an error if rover is not pointed in one of the four cardinal directions', () => {
            const rover4 = new MarsRover(1, 1, 'F', 'LM', [5,5]);
            expect(() => rover4.explore()).toThrowError('Rover is not pointed in one of the four cardinal directions.');
        });
    });

    describe('#explore()', () => {
        it('returns the final coordinates and cardinal direction', () => {
            const finalPosition = rover.explore();
            const finalPosition2 = rover2.explore();
            expect(finalPosition).toEqual('1 3 N');
            expect(finalPosition2).toEqual('5 1 E');
        });

        it('throws an error for an invalid movement', () => {
            const rover5 = new MarsRover(1, 1, 'N', 'F', [5,5]);
            expect(() => rover5.explore()).toThrowError('This is not a valid movement.');
        });
    });
});
