import React, { useState } from 'react'
import styles from './Square.module.css'

export default function Square({ index, onclick, type }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        squareRef.current.classList.toggle(styles.start);
        onclick(index);
    }

    return (
        <div
            className={styles.square}
            onClick={handleClick}
        >
        </div>
    )
}
