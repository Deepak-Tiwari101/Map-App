import React, { useState } from 'react'
import styles from './Grid.module.css'
import Square from '../Square/Square'

export default function Grid() {

    const numSquares = 1200;
    const handleClickCb = (idx) => {
        console.log(idx);
    }
    return (
        <div className={styles.glassySquare}>
            {Array.from({ length: numSquares }).map((_, index) => (
                <Square index={index} onclick={handleClickCb} />
            ))}
        </div>
    )
}
