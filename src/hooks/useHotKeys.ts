import { useEffect } from 'react';

type KeyMap = { [key: string]: () => void };

const useHotkeys = (keyMap: KeyMap, dependencies: unknown[] = []) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    const isInputElement = ['input', 'textarea'].includes(document.activeElement?.tagName.toLowerCase() ?? '');

    if (isInputElement && event.key.toLowerCase() !== 'escape') {
      return;
    }

    const keyCombination = `${event.ctrlKey ? 'ctrl+' : ''}${event.metaKey ? 'meta+' : ''}${event.key.toLowerCase()}`;
    if (keyMap[keyCombination]) {
      event.preventDefault();
      keyMap[keyCombination]();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, dependencies);
};

export default useHotkeys;
