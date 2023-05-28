import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.canvas`
  /* Define the @font-face rule */
  @font-face {
    font-family: 'Eina03-SemiBold';
    src: url('/eina/Eina03-SemiBold.otf') format('truetype');
  }

  /* Define other styles for the canvas if needed */
  /* ... */
`;

const CanvasImage = ({ firstName, lastName, cardNo }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Load the image
        const image = new Image();
        image.src = 'background.png';

        canvas.width = 600;
        canvas.height = 394;
        image.onload = () => {
            // Draw the image on the canvas
            context.drawImage(image, 0, 0, 600, 394);

            // Set the text properties
            context.font = '33px Eina03-SemiBold';
            context.fillStyle = 'white';
            context.textAlign = 'left';

            // Draw the text on the canvas
            context.fillStyle = 'white';
            context.fillText(firstName + ' ' + lastName, 42, 230);
            context.fillText(cardNo, 42, 320);
        };
    }, []);

    return <CanvasContainer ref={canvasRef} />;
};

export default CanvasImage;
