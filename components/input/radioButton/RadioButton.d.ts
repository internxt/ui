export interface RadioButtonProps {
    checked: boolean;
    id?: string;
    disabled?: boolean;
    onClick: (e?: unknown) => void;
}
/**
 * RadioButton component
 *
 * A custom radio button component that allows the user to select one option from a group of choices.
 *
 * @property {boolean} checked
 * - Determines whether the radio button is selected (checked) or not. If true, the radio button appears active.
 *
 * @property {string} [id]
 * - The unique identifier for the radio button element. Useful for associating labels or customizing the radio button.
 *
 * @property {boolean} [disabled]
 * - If true, disables the radio button, making it unclickable and visually indicating its inactive state.
 *
 * @property {(e?: unknown) => void} onClick
 * - A callback function triggered when the radio button is clicked.
 * Can be used to handle custom behavior when the button is selected.
 */
declare const RadioButton: ({ checked, id, disabled, onClick }: RadioButtonProps) => import("react/jsx-runtime").JSX.Element;
export default RadioButton;
