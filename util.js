import { MarsRover } from './mars_rover';

export function formatPlateauLimitations(coordinates) {
    // remove whitespace, return plateau limitations as array of x, y coordinates (integers)
    return (coordinates.replace(/\s/g,'').toString().split('')).map(Number);
}

export function exploreMars(explorationInformation) {
    const instructions = explorationInformation.split('\n');
    
    const plateauLimitations = formatPlateauLimitations(instructions[0]);

    // remove the plateauCoordinates from the rover instructions
    instructions.shift();
    const roverInstructions = instructions;
    
    // iterate over roverInstructions two at a time- starting position, route instructions
    for (let i=0; i<roverInstructions.length; i+=2) {
        //remove all whitespace
        let startingPosition = roverInstructions[i].replace(/\s/g,'');
        let routeInstructions = roverInstructions[i+1].replace(/\s/g,'');

        let startingXCoordinate = parseInt(startingPosition[0]);
        let startingYCoordinate = parseInt(startingPosition[1]);
        let startingDirection = startingPosition[2];

        const rover = new MarsRover(
            startingXCoordinate, 
            startingYCoordinate, 
            startingDirection, 
            routeInstructions, 
            plateauLimitations
            );
        
        rover.explore();
    }
}
