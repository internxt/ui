interface RadioButtonProps {
    checked: boolean;
    id?: string;
    disabled?: boolean;
    onClick: (e?: unknown) => void;
}
export declare const RadioButton: ({ checked, id, disabled, onClick }: RadioButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
