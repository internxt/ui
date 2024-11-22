interface CheckboxProps {
    id?: string;
    checked?: boolean;
    indeterminate?: boolean;
    onClick?: React.DOMAttributes<HTMLLabelElement>['onClick'];
    required?: boolean;
    className?: string;
    checkboxDataCy?: string;
    disabled?: boolean;
}
declare const Checkbox: ({ id, checked, indeterminate, onClick, required, className, checkboxDataCy, disabled, }: CheckboxProps) => JSX.Element;
export default Checkbox;
