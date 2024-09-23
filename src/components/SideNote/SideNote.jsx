import { React, useMemo } from 'react'
import styles from './SideNote.module.css'
import { Notes } from '../../constants/Notes'
import { useIndexInfo } from '../../context/IndexInfoContext'

export default function SideNote() {
    const { indexInfo } = useIndexInfo();

    const currentNote = useMemo(() => {
        return Notes.find(note => note.title === indexInfo?.selectedType)
    }, [indexInfo.selectedType]);

    return (
        currentNote && <div className={`${styles.section} ${styles.sectionexit}`}>
            <h3>Side Note</h3>
            <p>{currentNote.content}</p>
        </div>
    )
}
