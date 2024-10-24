interface TextAreaComponentProps {
    disabled?: boolean;
    accentColor?: 'red';
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    name?: string;
}
declare const TextArea: ({ disabled, accentColor, placeholder, value, onChange, name }: TextAreaComponentProps) => JSX.Element;
export default TextArea;
