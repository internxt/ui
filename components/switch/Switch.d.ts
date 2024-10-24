interface SwitchComponentProps {
    size: 'md' | 'lg' | 'xl';
    id?: string;
    dataTestId?: string;
    disabled?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    onClick?: (e?: unknown) => void;
}
export declare const SwitchComponent: ({ disabled, id, dataTestId, size, onClick, onCheckedChange, }: SwitchComponentProps) => import("react/jsx-runtime").JSX.Element;
export {};
