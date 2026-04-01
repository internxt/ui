export interface SkeletonLoaderItemProps {
    skeletonItem: Array<React.ReactElement> | undefined;
    columns: Array<string>;
}
export interface SkeletonLoaderProps {
    skeleton: Array<SkeletonLoaderItemProps>;
}
export declare const SkeletonLoaderItem: ({ skeletonItem, columns }: SkeletonLoaderItemProps) => React.ReactElement;
/**
 * SkeletonLoader component to display loading placeholders in list layouts.
 *
 * @param skeleton - Array of skeleton items, {skeletonItem, columns}
 *                 - The params of each skeletonItem:
 *                            - skeletonItem: - Array of elements representing the loading placeholders.
 *                            - columns: - An array of CSS class names for each column, defining their layout and style.
 *
 */
declare const SkeletonLoader: ({ skeleton }: SkeletonLoaderProps) => React.ReactElement;
export default SkeletonLoader;
