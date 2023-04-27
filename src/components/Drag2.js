import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';

const Drag2 = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [buttonSize, setButtonSize] = useState({ width: 70, height: 40 });
  const [imageSize, setImageSize] = useState({ width: 700, height: 500 });
  const buttonRef = useRef(null);

  const handleButtonDrag = (event, { x, y }) => {
    const maxX = imageSize.width - buttonSize.width;
    const maxY = imageSize.height - buttonSize.height;
    const constrainedX = Math.min(Math.max(0, x), maxX);
    const constrainedY = Math.min(Math.max(0, y), maxY);
    setButtonPosition({ x: constrainedX, y: constrainedY });
  };

  const handleImageLoad = (event) => {
    setImageSize({ width: event.target.width, height: event.target.height });
  };

  const handleButtonLayout = () => {
    if (buttonRef.current) {
      setButtonSize({
        width: buttonRef.current.offsetWidth,
        height: buttonRef.current.offsetHeight,
      });
    }
  };

  return (
    <>
    <div className="container">
      <img src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg" alt="Image 1" 
      style={{width : "700px", height:"500px"}} 
      onLoad={handleImageLoad}
       />
      <Draggable
        handle=".handle"
        defaultPosition={buttonPosition}
        onDrag={handleButtonDrag}
        onStart={() => buttonPosition}
        bounds={{
          left: 0,
          top: 0,
          right: imageSize.width - buttonSize.width,
          bottom: imageSize.height - buttonSize.height,
        }}
      >
        <button
          className="button handle"
          ref={buttonRef}
          onLoad={handleButtonLayout}
          style={{ width: buttonSize.width, height: buttonSize.height }}
        >
          Button
        </button>
      </Draggable>
     
    </div>
    <input type='file'/>
    </>
  );
};

export default Drag2;


