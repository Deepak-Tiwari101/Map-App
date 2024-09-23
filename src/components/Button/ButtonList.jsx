import React from 'react'
import styles from './Button.module.css'
import Button from './Button'
import { useIndexInfo } from '../../context/IndexInfoContext'
import { Type } from '../../constants/TypeEnum'

export default function ButtonList() {
    const { indexInfo, setIndexInfo } = useIndexInfo();
    return (
        <ul className={styles.buttonList}>
            <Button label="Start Cell" onClick={() => setIndexInfo({ ...indexInfo, selectedType: Type.START })} />
            <Button label="End Cell" onClick={() => setIndexInfo({ ...indexInfo, selectedType: Type.END })} />
            <Button label="Blockades" onClick={() => setIndexInfo({ ...indexInfo, selectedType: Type.BLOCK })} />
            <Button label="Clear Cells" onClick={() => setIndexInfo({ ...indexInfo, selectedType: Type.EMPTY })} />
            <Button label="Find Path" />
        </ul>
    )
}