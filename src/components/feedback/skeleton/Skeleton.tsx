import SkeletonItem from './SkeletonItem';

/**
 * Loading placeholder for the "usage / limit" amount (e.g. "8GB / 100GB").
 */
const Skeleton = (): React.ReactElement => (
  <div className="flex flex-row items-center gap-2">
    <SkeletonItem className="h-3 w-8" />
    <SkeletonItem className="h-3 w-2" />
    <SkeletonItem className="h-3 w-8" />
  </div>
);

export default Skeleton;
