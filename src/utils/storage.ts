export type StorageLevel = 'normal' | 'lowWarning' | 'middleWarning' | 'highWarning';


export const getStorageLevel = (percentage: number): StorageLevel => {
  if (percentage >= 95) return 'highWarning';
  if (percentage >= 80) return 'middleWarning';
  if (percentage >= 60) return 'lowWarning';
  return 'normal';
};
