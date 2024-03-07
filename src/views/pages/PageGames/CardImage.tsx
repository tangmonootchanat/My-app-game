import React, { useState } from 'react';
import styled, { css } from 'styled-components';

// const Card = styled.img<{ isFlipped: boolean }>`
//   /* width: 150px;
//   height: 150px;
//   transform-style: preserve-3d;
//   transition: transform 0.3s;
//   transform: ${props => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')}; */
// `;

// const CardContainer = styled.div`
//   /* perspective: 1000px; */
// `;

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
