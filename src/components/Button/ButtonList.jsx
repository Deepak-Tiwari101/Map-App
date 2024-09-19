import React from 'react'
import styles from './Button.module.css'
import Button from './Button'

export default function ButtonList() {
    return (
        <ul className={styles.buttonList}>
            <Button label="Start Cell" />
            <Button label="End Cell" />
            <Button label="Clear Cells" />
            <Button label="Find Path" />
        </ul>
    )
}
