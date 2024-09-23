import React, { useState } from 'react'
import styles from './Grid.module.css'
import Square from '../Square/Square'

export default function Grid() {
    const numSquares = 1000;

    return (
        <div className={styles.glassySquare}>
            {Array.from({ length: numSquares }).map((_, index) => (
                <Square
                    key={index}
                    index={index}

                />
            ))}
        </div>
    )
}