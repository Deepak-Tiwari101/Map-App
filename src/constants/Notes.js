import { Type } from './TypeEnum'

export const Notes = [
    {
        title: Type.START,
        content: 'Select a square in the grid for the starting point.'
    },
    {
        title: Type.END,
        content: 'Select another square in the grid for the ending point.'
    },
    {
        title: Type.EMPTY,
        content: 'Select any square in the grid to confirm clearing the cells and resetting the pathfinding.'
    },
    {
        title: Type.BLOCK,
        content: 'Select square(s) in the grid to block path between start and end point.'
    },
]
