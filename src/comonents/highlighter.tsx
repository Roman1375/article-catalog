import * as React from 'react';

interface HighlighterProps {
    text: string;
    query: string;
}

const Highlighter: React.FC<HighlighterProps> = ({text, query}) => {
    if (!query.trim()) return <>{text}</>;

    const keywords = query.trim().split(/\s+/).filter(Boolean).join('|');
    const regex = new RegExp(`(${keywords})`, 'gi');

    const parts = text.split(regex);

    return (
        <>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <mark
                        key={index}
                        style={{backgroundColor: '#7dc3ff', color: 'inherit', padding: 0}}
                    >
                        {part}
                    </mark>
                ) : (
                    part
                )
            )}
        </>
    );
};

export default Highlighter;