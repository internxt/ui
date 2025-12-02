import { ReactNode } from '../../../node_modules/react';
export interface TooltipProps {
    children: ReactNode;
    title: string;
    subtitle?: string;
    popsFrom: 'right' | 'left' | 'top' | 'bottom';
    className?: string;
    delayInMs?: number;
    arrow?: boolean;
}
/**
 * Tooltip component
 *
 * @property {ReactNode} children
 * - The content that triggers the tooltip when hovered over.
 *
 * @property {string} title
 * - The main text displayed inside the tooltip. This is required.
 *
 * @property {string} [subtitle]
 * - An optional subtitle displayed below the main title inside the tooltip.
 *
 * @property {'right' | 'left' | 'top' | 'bottom'} popsFrom
 * - Determines the direction from which the tooltip appears relative to the trigger element.
 *   - "right": Tooltip appears to the right of the element.
 *   - "left": Tooltip appears to the left of the element.
 *   - "top": Tooltip appears above the element.
 *   - "bottom": Tooltip appears below the element.
 *
 * @property {string} [className]
 * - Additional CSS classes to style the tooltip container. Use to override default styles.
 *
 * @property {number} [delayInMs]
 * - The delay (in milliseconds) before hiding the tooltip after the mouse leaves the trigger element.
 *   - If not provided, the tooltip hides immediately.
 *
 * @property {boolean} [arrow=true]
 * - Whether to display the arrow pointing to the trigger element.
 *   - Default is true.
 *
 * @returns {JSX.Element}
 * - A tooltip component that shows additional information when hovering over its children.
 */
declare const Tooltip: ({ children, title, subtitle, popsFrom, className, delayInMs, arrow, }: TooltipProps) => JSX.Element;
export default Tooltip;
