import React, { FC } from 'react';

interface PhotoCircleProps {
  backgroundImage: string;
  text: string;
}

const PhotoCircle: FC<PhotoCircleProps> = ({ backgroundImage, text }) => {
  const circleStyle = {
    width: '180px', // Defina o tamanho do círculo como desejado
    height: '180px',
    borderRadius: '50%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '6px solid #BFDBFE',
  };

  return (
    <div>
      <div style={circleStyle} />
      <p className='text-white font-roboto font-normal text-md m-2'>{text}</p>
    </div>
  );
};

export default PhotoCircle;
