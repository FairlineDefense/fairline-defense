import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
color: var(--primary);
width: 220px;
border-color: var(--primary);
border: 1px solid;
border-radius: 5px;
padding: 0.75rem;
background: transparent;
outline: none;
margin: 0.5rem 0rem 0.5rem 0rem;
font-size: 18px;
font-weight: 200;
cursor: pointer;
`

const DownloadButton = ({ canvasRef }) => {
    const handleDownload = () => {
        const canvas = canvasRef.current;
        const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'card.png';
        link.click();
    };

    return <Button onClick={handleDownload}>Download</Button>;
};

export default DownloadButton;
