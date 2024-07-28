import React from 'react'
import styles from './Grid.module.css'
import Square from '../Square/Square'

export default function Grid() {
    const numSquares = 3400;
    return (
        <div className={styles.glassySquare}>
            {Array.from({ length: numSquares }).map((_, index) => (
                <Square key={index} />
            ))}
        </div>
    )
}
