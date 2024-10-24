interface InputComponentProps {
    type?: 'text' | 'password';
    size?: 'lg' | 'md';
    disabled?: boolean;
    accentColor?: 'red' | 'orange' | 'green';
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
}
declare const Input: ({ type, size, disabled, accentColor, placeholder, value, onChange, name }: InputComponentProps) => JSX.Element;
export default Input;
