import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Drag1 = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleButtonDrag = (event, { x, y }) => {
    setButtonPosition({ x, y });
  };

  return (
    <div className="container">
      <img src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg" alt="Image 1" />
      <Draggable
        handle=".handle"
        defaultPosition={buttonPosition}
        onDrag={handleButtonDrag}
      >
        <button className="button handle">Button</button>
      </Draggable>
    </div>
  );
};

export default Drag1;
