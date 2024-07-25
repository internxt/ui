import { PaintBucket } from '@phosphor-icons/react';

export const ActionBar = () => {
  return (
    <div className="flex flex-row border border-gray-5 bg-gray-1">
      <p className="p-1">Arial</p>
      <p className="p-1 border-r border-l border-gray-10">14px</p>
      <div className="p-1 border-r border-l border-gray-10">
        <PaintBucket size={} />
      </div>
      <div></div>
    </div>
  );
};
