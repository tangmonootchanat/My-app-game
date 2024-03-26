import React, { useState } from 'react';
import styled, { css } from 'styled-components';


const CardImage: React.FC<{ id: number, image: string, onClick: (id: number) => void }> = ({ id, image, onClick }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        if (!flipped) {
            onClick(id);
            setFlipped(true);
        }
    };

    return (
        <div onClick={handleClick}>
            <img src={image} alt={`Card ${id}`}  />
        </div>
    );
};

export default CardImage;
