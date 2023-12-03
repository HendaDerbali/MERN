import React from 'react';
import { useParams } from 'react-router-dom';


const Word = () => {

const { color, backgroundColor,word } = useParams();

return (
    <div>
    <p style={{ backgroundColor, color }}>{word}</p>
    </div>
);
};

export default Word;
