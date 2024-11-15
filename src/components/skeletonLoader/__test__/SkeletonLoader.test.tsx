import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SkeletonLoader from '../../../components/skeletonLoader/SkeletonLoader';
import { expect, describe, it } from 'vitest';

describe('SkeletonLoader', () => {
  const renderSkeletonLoader = () => {
    const skeletonData = new Array(3).fill(0).map((_row, index) => ({
      skeletonItem: [
        <div key={`skin-skeleton-1-${index}`} className="mr-3 flex w-full flex-row items-center space-x-4">
          <div className="h-8 w-8 rounded-md bg-gray-5" />
          <div className="h-4 w-full rounded bg-gray-5" />
        </div>,
        <div key={`skin-skeleton-2-${index}`} className="h-4 w-64 rounded bg-gray-5" />,
        <div key={`skin-skeleton-3-${index}`} className="ml-3 h-4 w-24 rounded bg-gray-5" />,
      ],
      columns: ['flex grow items-center min-w-driveNameHeader', 'w-date', 'w-size'],
    }));
    return render(<SkeletonLoader skeleton={skeletonData} />);
  };

  it('should match snapshot', () => {
    const skeletonLoader = renderSkeletonLoader();
    expect(skeletonLoader).toMatchSnapshot();
  });

  it('should render the correct number of SkeletonLoaderItem', () => {
    renderSkeletonLoader();

    const skeletonItems = screen.getAllByTestId('skeleton-loader-item');
    expect(skeletonItems).toHaveLength(3);
  });

  it('should render columns with the correct classes', () => {
    renderSkeletonLoader();

    const items = screen.getAllByTestId('skeleton-loader-item')[0].querySelectorAll('div');

    const column1 = items[0];
    const column2 = items[4];
    const column3 = items[6];
    expect(column1).toHaveClass('flex');
    expect(column2).toHaveClass('w-date');
    expect(column3).toHaveClass('w-size');
  });

  it('should handle an empty skeleton array correctly', () => {
    render(<SkeletonLoader skeleton={[]} />);

    const skeletonItems = screen.queryAllByTestId('skeleton-loader-item');
    expect(skeletonItems).toHaveLength(0);
  });
});
