type KeyMap = {
    [key: string]: () => void;
};
declare const useHotkeys: (keyMap: KeyMap, dependencies?: unknown[]) => void;
export default useHotkeys;
