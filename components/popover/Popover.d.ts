import { ReactNode } from '../../../node_modules/react';

export interface PopoverProps {
    childrenButton: ReactNode;
    panel: (closePopover: () => void) => ReactNode;
    className?: string;
    classButton?: string;
}
/**
 * Popover component
 *
 * @property {ReactNode} childrenButton
 * - The content to be displayed inside the trigger button.
 *
 * @property {(closePopover: () => void) => ReactNode} panel
 * - A function that returns the content to be displayed inside the popover panel.
 * It receives a `closePopover` function as a parameter, which can be used to programmatically close the popover.
 *
 * @property {string} [className]
 * - Additional custom classes for the outermost container of the popover.
 * Can be used for positioning or adding custom styles.
 *
 * @property {string} [classButton]
 * - Custom classes for the trigger button.
 *
 * @returns {JSX.Element}
 * - The rendered Popover component.
 */
declare const Popover: ({ childrenButton, panel, className, classButton }: PopoverProps) => JSX.Element;
export default Popover;
