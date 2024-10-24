interface CheckboxComponentProps {
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    onClick?: (e: unknown) => void;
    required?: boolean;
}
declare const Checkbox: ({ checked, indeterminate, disabled, onClick, required, }: CheckboxComponentProps) => JSX.Element;
export default Checkbox;
