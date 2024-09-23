import { useCallback, useMemo } from 'react'
import styles from './Square.module.css'
import { useIndexInfo } from '../../context/IndexInfoContext';
import { Type } from '../../constants/TypeEnum';

export default function Square({ index }) {
    const { indexInfo, setIndexInfo } = useIndexInfo();

    const handleClick = useCallback(() => {
        if (indexInfo.selectedType === Type.START) {
            setIndexInfo({ ...indexInfo, startIndex: index });
        } else if (indexInfo.selectedType === Type.END) {
            setIndexInfo({ ...indexInfo, endIndex: index });
        } else if (indexInfo.selectedType === Type.BLOCK) {
            setIndexInfo({
                ...indexInfo,
                blockIndexes: [...indexInfo.blockIndexes, index]
            });
        } else if (indexInfo.selectedType === Type.EMPTY) {
            setIndexInfo({
                startIndex: null,
                endIndex: null,
                blockIndexes: []
            });
        }
    }, [indexInfo, index, setIndexInfo]);

    const squareColor = useMemo(() => {
        if (indexInfo.startIndex === index) return styles.start;
        if (indexInfo.endIndex === index) return styles.end;
        if (indexInfo.blockIndexes.includes(index)) return styles.block;
        return '';
    }, [indexInfo, index]);

    return (
        <div
            className={`${styles.square} ${squareColor}`}
            onClick={handleClick}
        >
        </div>
    )
}