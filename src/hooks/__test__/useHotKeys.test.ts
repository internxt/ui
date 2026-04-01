import { renderHook } from '@testing-library/react';
import { describe, it, vi, afterEach, expect } from 'vitest';
import useHotkeys from '../useHotKeys';

describe('useHotkeys', () => {
  let keyDownEvent: KeyboardEvent;

  const fireKeyDown = (key: string, options: Partial<KeyboardEvent> = {}) => {
    keyDownEvent = new KeyboardEvent('keydown', {
      key,
      ctrlKey: options.ctrlKey || false,
      metaKey: options.metaKey || false,
      ...options,
    });
    window.dispatchEvent(keyDownEvent);
  };

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should call the correct function for a single key press', () => {
    const callback = vi.fn();
    const keyMap = { a: callback };

    renderHook(() => useHotkeys(keyMap));

    fireKeyDown('a');
    expect(callback).toHaveBeenCalledOnce();
  });

  it('should call the correct function for a key combination with Ctrl', () => {
    const callback = vi.fn();
    const keyMap = { 'ctrl+a': callback };

    renderHook(() => useHotkeys(keyMap));

    fireKeyDown('a', { ctrlKey: true });
    expect(callback).toHaveBeenCalledOnce();
  });

  it('should call the correct function for a key combination with Meta', () => {
    const callback = vi.fn();
    const keyMap = { 'meta+a': callback };

    renderHook(() => useHotkeys(keyMap));

    fireKeyDown('a', { metaKey: true });
    expect(callback).toHaveBeenCalledOnce();
  });

  it('should not call any function if the key combination is not in the keyMap', () => {
    const callback = vi.fn();
    const keyMap = { 'ctrl+b': callback };

    renderHook(() => useHotkeys(keyMap));

    fireKeyDown('a', { ctrlKey: true });
    expect(callback).not.toHaveBeenCalled();
  });

  it('should clean up event listener on unmount', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useHotkeys({ a: () => {} }));

    expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
  });
});
