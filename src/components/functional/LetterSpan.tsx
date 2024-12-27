// component to animate text where each letter will be highlighted after a counter

export default function LetterSpan(props: { index: number, emphasisIndex: number[], letter: string }) {
    const { index, emphasisIndex, letter } = props;

    const className = emphasisIndex.includes(index) && index <= Math.max(...emphasisIndex) ? "emphasis" : "";

    return (
        <span className={className}>{letter}</span>
    )
}
