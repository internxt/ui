export interface SwitchComponentProps {
    size?: 'md' | 'lg' | 'xl';
    id?: string;
    dataTestId?: string;
    disabled?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    onClick?: (e?: unknown) => void;
}
/**
 * SwitchComponent
 *
 * A toggle switch component that allows users to toggle between two states: on/off or checked/unchecked.
 *
 * @property {string} size
 * - Defines the size of the switch. Options are 'md', 'lg', or 'xl'.
 *
 * @property {string} [id]
 * - The unique identifier for the switch element.
 *
 * @property {string} [dataTestId]
 * - A custom data attribute for use in testing or identifying the switch in the DOM.
 *
 * @property {boolean} [disabled]
 * - If true, disables the switch, making it unclickable and visually indicating its inactive state.
 *
 * @property {(checked: boolean) => void} [onCheckedChange]
 * - A callback function triggered whenever the checked state changes. Receives the new checked state as an argument.
 *
 * @property {(e?: unknown) => void} [onClick]
 * - A callback function triggered when the switch is clicked. Allows for custom click behavior.
 */
declare const SwitchComponent: ({ disabled, id, dataTestId, size, onClick, onCheckedChange, }: SwitchComponentProps) => import("react/jsx-runtime").JSX.Element;
export default SwitchComponent;
