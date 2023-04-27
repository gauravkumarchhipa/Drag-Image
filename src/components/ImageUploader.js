import React, { useState } from 'react';

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <>
    <div>
      {selectedFile && (
        <img src={URL.createObjectURL(selectedFile)} alt="Selected File" />
      )}
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <input type="file" onChange={handleFileSelect} />
    </>
  );
}

export default ImageUploader;
