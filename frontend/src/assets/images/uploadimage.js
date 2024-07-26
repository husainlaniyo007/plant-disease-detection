
import React from 'react';

const ImageUpload = () => {
  const handleUpload = (event) => {
    // handle image upload
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
    </div>
  );
};

export default ImageUpload;
