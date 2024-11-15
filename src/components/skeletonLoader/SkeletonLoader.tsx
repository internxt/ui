interface SkeletonLoaderItemProps {
  skeletonItem: Array<React.ReactElement> | undefined;
  columns: Array<string>;
}

interface SkeletonLoaderProps {
  skeleton: Array<SkeletonLoaderItemProps>;
}

export const SkeletonLoaderItem = ({ skeletonItem, columns }: SkeletonLoaderItemProps): React.ReactElement => {
  return (
    <div
      data-testid="skeleton-loader-item"
      className={'group relative flex h-14 animate-pulse flex-row items-center pl-14 pr-5'}
    >
      {new Array(columns.length).fill(0).map((col, i) => (
        <div
          key={`${col}-${i}`}
          className={`relative flex h-full shrink-0 flex-row items-center overflow-hidden whitespace-nowrap border-b border-gray-5 ${columns[i]}`}
        >
          {skeletonItem?.[i]}
        </div>
      ))}
    </div>
  );
};

/**
 * SkeletonLoader component to display loading placeholders in list layouts.
 *
 * @param skeleton - Array of skeleton items, {skeletonItem, columns}
 *                 - The params of each sekeletonItem:
 *                            - skeletonItem: - Array of elements representing the loading placeholders.
 *                            - columns: - An array of CSS class names for each column, defining their layout and style.
 *
 */
const SkeletonLoader = ({ skeleton }: SkeletonLoaderProps): React.ReactElement => {
  return (
    <>
      {new Array(skeleton.length).fill(0).map((_col, i) => (
        <SkeletonLoaderItem
          key={`skinSkeletonRow${i}`}
          skeletonItem={skeleton[i].skeletonItem}
          columns={skeleton[i].columns}
        />
      ))}
    </>
  );
};

export default SkeletonLoader;
