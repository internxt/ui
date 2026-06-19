import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkeletonItem } from '../';

describe('SkeletonItem', () => {
  it('should match snapshot', () => {
    const skeleton = render(<SkeletonItem />);
    expect(skeleton).toMatchSnapshot();
  });

  it('should render a pulsing placeholder', () => {
    const { container } = render(<SkeletonItem />);

    const item = container.firstChild as HTMLElement;
    expect(item).toHaveClass('animate-pulse');
    expect(item).toHaveClass('rounded-lg');
    expect(item).toHaveClass('bg-gray-5');
  });

  it('should append the provided className', () => {
    const { container } = render(<SkeletonItem className="h-3 w-8" />);

    const item = container.firstChild as HTMLElement;
    expect(item).toHaveClass('h-3');
    expect(item).toHaveClass('w-8');
    expect(item).toHaveClass('animate-pulse');
  });
});
