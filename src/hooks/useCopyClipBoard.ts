import { useState } from 'react';
import { Handler } from 'referlink-ui';

type onCopyFn = (value: string) => Promise<boolean>;

export const useCopyClipBoard = (): [boolean, onCopyFn] => {
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const onCopy: onCopyFn = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      setIsCopy(true);
      return true;
    } catch (error) {
      setIsCopy(false);
      return false;
    }
  };

  return [isCopy, onCopy];
};
