
import React, { Fragment, useEffect, useState } from 'react'
import LetterSpan from './LetterSpan';

export default function LetterSpanHolder(props: { emphasisIndex: number[], string: string, timeStepinS: number, useWords?: boolean }) {
    const { emphasisIndex, string, timeStepinS, useWords } = props;
    const [counter, setCounter] = useState(0);
    let newString: string[] = [];
    if (useWords) {
        let string_double = string.replace(/\s+/g, ' ').trim();
        newString = string_double.split(" ");
    } else {
        newString = string.split("")
    }

    const maxEnphasisIndex = Math.max(...emphasisIndex);

    useEffect(() => {
        const interval = setTimeout(() => {
            if ((counter + maxEnphasisIndex) < newString.length - 1) {
                setCounter(counter + step());
            } else {
                setCounter(0);
            }
        }, timeStepinS * 1000);
        return () => {
            clearTimeout(interval);
        }
    }, [counter]);

    function step() {
        // check if indices in emphasisIndex are consecutive
        let sorted = emphasisIndex.sort((a, b) => a - b);
        let isConsecutive = sorted.every((v, i, a) => !i || v === a[i - 1] + 1);
        if (isConsecutive) {
            return emphasisIndex.length;
        } else {
            return 1;
        }
    }



    const list_char = newString.map((item, i) => {
        return (<LetterSpan key={i} index={i} emphasisIndex={emphasisIndex.map((v) => (v + counter))} letter={item} />);
    });
    return (
        <Fragment>
            {list_char}
        </Fragment>
    )

}
