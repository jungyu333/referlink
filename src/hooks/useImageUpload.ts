import { ChangeEvent, useRef, useState } from 'react';

export const useImageUpload = () => {
  const [imageFile, setImageFile] = useState<File | null>();
  const [preview, setPreview] = useState<string>('');
  const [imageName, setImageName] = useState<string>('');
  const imageInputRef = useRef<HTMLInputElement>(null);

  const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];

      if (file) {
        setImageFile(file);
        setPreview(URL.createObjectURL(file));
        setImageName(file.name);
      }
    }
  };

  const onRemoveImage = () => {
    setImageFile(null);
    setPreview('');
    setImageName('');

    if (imageInputRef.current) {
      imageInputRef.current.value = '';
    }
  };

  return {
    imageFile,
    preview,
    imageName,
    onChangeImage,
    onRemoveImage,
    imageInputRef,
  };
};
