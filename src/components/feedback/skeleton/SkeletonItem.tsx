export interface SkeletonItemProps {
  className?: string;
}

const SkeletonItem = ({ className }: SkeletonItemProps): React.ReactElement => (
  <div className={`rounded-lg bg-gray-5 animate-pulse${className ? ` ${className}` : ''}`} />
);

export default SkeletonItem;
