import { ReactNode } from '../../../node_modules/react';

interface ButtonProps {
    id?: string;
    variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
    type?: 'button' | 'submit';
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: (e?: unknown) => void;
    onKeyDown?: (e?: unknown) => void;
    size?: 'medium' | 'default';
    loading?: boolean;
    dataTest?: string;
    autofocus?: boolean;
    buttonDataCy?: string;
    buttonChildrenDataCy?: string;
}
export declare const Button: ({ variant, type, id, children, className, disabled, onClick, onKeyDown, size, loading, dataTest, autofocus, buttonDataCy, buttonChildrenDataCy, }: Readonly<ButtonProps>) => JSX.Element;
export {};
