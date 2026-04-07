import { ReactNode } from '../../../../node_modules/react';
export interface GridProps {
    children?: ReactNode;
    className?: string;
    id?: string;
    dataCy?: string;
}
/**
 * Grid component
 *
 * A responsive grid container that automatically adjusts columns from 2 (mobile) up to 6 (extra large screens).
 *
 * @param {GridProps} props - The properties of the component.
 *
 * @property {ReactNode} [children]
 * - The child components or elements to be rendered inside the grid container.
 *
 * @property {string} [className]
 * - Optional custom CSS classes for additional styling or layout adjustments overriding default tailwind classes.
 *
 * @property {string} [id]
 * - Optional ID for the grid container element.
 *
 * @property {string} [dataCy]
 * - Custom data attribute used for e2e Cypress test targeting.
 *
 * @returns {JSX.Element}
 * - A JSX element containing the children formatted inside a grid.
 */
declare const Grid: ({ children, className, id, dataCy }: Readonly<GridProps>) => JSX.Element;
export default Grid;
