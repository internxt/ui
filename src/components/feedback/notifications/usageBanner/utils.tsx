import React from 'react';
import { StorageLevel } from '../../../../utils/storage';

export { getStorageLevel } from '../../../../utils/storage';
export type { StorageLevel } from '../../../../utils/storage';

export const STORAGE_LEVEL_STYLES: Record<StorageLevel, { bar: string }> = {
  normal: { bar: 'bg-yellow-60' },
  'lowWarning': { bar: 'bg-yellow-60' },
  'middleWarning': { bar: 'bg-orange-60' },
  'highWarning': { bar: 'bg-danger' },
};

export const renderWithBold = (text: string): React.ReactNode =>
  text.split(/(\*\*[^*]+\*\*)/g).map((segment, index) => {
    if (segment.startsWith('**') && segment.endsWith('**')) {
      return <strong key={index}>{segment.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={index}>{segment}</React.Fragment>;
  });
