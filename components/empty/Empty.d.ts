import { Upload } from '@phosphor-icons/react';

export interface EmptyProps {
    icon: JSX.Element;
    title: string;
    subtitle: string;
    action?: {
        text: string;
        icon: typeof Upload;
        style: 'plain' | 'elevated';
        onClick: () => void;
    };
    contextMenuClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
/**
 * Empty component
 *
 * This component is used to display a message or placeholder content when there is no data or items available.
 * It allows for a customizable icon, title, subtitle, and an optional action button.
 *
 * @property {JSX.Element} icon
 * - The icon to be displayed at the top of the component. This can be any valid React element.
 *
 * @property {string} title
 * - The main title or heading to be displayed in the component.
 *
 * @property {string} subtitle
 * - A secondary subtitle or description.
 *
 * @property {object} [action]
 * - An optional object containing details for an action button that can be displayed.
 *
 * @property {string} action.text
 * - The text to display on the action button.
 *
 * @property {Function} [contextMenuClick]
 * - An optional function to handle right-click (context menu) interactions on the component.
 */
declare const Empty: ({ icon, title, subtitle, action, contextMenuClick }: EmptyProps) => JSX.Element;
export default Empty;
