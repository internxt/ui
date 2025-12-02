import { ReactNode } from '../../../node_modules/react';
/**
 * Card component
 *
 * @property {string} [className]
 * - Optional additional CSS classes to customize the appearance of the card.
 * By default, the card has rounded corners, border, padding, and shadow.
 *
 * @property {ReactNode} children
 * - The content to be rendered inside the card. This can be any valid React node.
 */
declare const Card: ({ className, children }: {
    className?: string;
    children: ReactNode;
}) => JSX.Element;
export default Card;
