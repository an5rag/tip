import React from 'react';

const styles = {
    fontFamily: "'Lora', serif",
    fontSize: "2.2em",
    fontWeight: "400",
    lineHeight: "1.5",
}

export const Title = () => {
    const title = 'the irrelevant project';
    const breakTitle = function(title) {
        const chars = title.split("");
        return chars.map((element, index) => (
            <span key={index}>{element}</span>
        ))
    }

    return (
        <span className="anim-text-flow" style={styles}>
        {breakTitle(title)}
        </span>
    );
}