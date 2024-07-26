export const uploadImage = (image) => {
  return {
    type: 'UPLOAD_IMAGE',
    payload: image
  };
};

