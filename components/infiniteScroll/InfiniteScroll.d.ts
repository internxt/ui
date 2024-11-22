import { default as React, ReactNode } from '../../../node_modules/react';

interface InfiniteScrollProps {
    children: ReactNode;
    handleNextPage: () => void;
    hasMoreItems: boolean | undefined;
    loader: React.ReactNode;
    scrollableTarget?: string;
    classNameLoader?: string;
}
/**
 * InfiniteScroll component to implement infinite scrolling functionality.
 *
 * @param hildren - The elements to be displayed inside the scroll container.
 * @param handleNextPage - Function to handle loading the next page of content
 * when the user scrolls to the bottom.
 * @param hasMoreItems - Flag indicating whether there are more items to load.
 * If `false` or `undefined`, no more items will be loaded.
 * @param loader - The component to display as a loader while new items are being fetched.
 * @param [scrollableTarget] - The ID of the scrollable container.
 * @param classNameLoader ClassName for loader.
 */
declare const InfiniteScroll: ({ children, handleNextPage, hasMoreItems, loader, scrollableTarget, classNameLoader, }: InfiniteScrollProps) => import("react/jsx-runtime").JSX.Element;
export default InfiniteScroll;
