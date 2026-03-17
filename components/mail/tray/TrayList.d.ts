import { ReactNode } from '../../../../node_modules/react';
export interface TrayListProps {
    mails: {
        id: string;
        from: {
            name: string;
            avatar: string;
        };
        subject: string;
        createdAt: string;
        body: string;
        read: boolean;
    }[];
    selectedEmails?: string[];
    loading: boolean;
    checked?: boolean;
    activeEmail?: string;
    hasMoreItems?: boolean;
    emptyState?: ReactNode;
    onMailSelected?: (id: string) => void;
    onLoadMore?: () => void;
}
/**
 *
 * @param {TrayListProps} TrayListProps - Props for the TrayList component
 * @prop {Array} TrayListProps.mails - An array of email objects
 *
 * @prop {string[]} TrayListProps.selectedEmails - An array of selected email IDs
 *
 * @prop {boolean} TrayListProps.loading - A boolean indicating loading state
 *
 * @prop {boolean} TrayListProps.checked - A boolean indicating whether all emails are checked
 *
 * @prop {string} TrayListProps.activeEmail - The ID of the currently active email
 *
 * @prop {boolean} TrayListProps.hasMoreItems - A boolean indicating whether there are more items to load
 *
 * @prop {ReactNode} TrayListProps.emptyState - A JSX element to display when there are no emails
 *
 * @prop {(id: string) => void} TrayListProps.onMailSelected - A function to handle email selection
 *
 * @prop {() => void} TrayListProps.onLoadMore - A function to load more emails
 *
 * @returns {JSX.Element} The rendered TrayList component
 */
declare const TrayList: ({ mails, selectedEmails, loading, checked, activeEmail, hasMoreItems, emptyState, onMailSelected, onLoadMore, }: TrayListProps) => import("react/jsx-runtime").JSX.Element;
export default TrayList;
