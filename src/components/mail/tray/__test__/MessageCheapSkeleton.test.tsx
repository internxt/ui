import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MessageCheapSkeleton } from '../MessageCheapSkeleton';

describe('MessageCheapSkeleton', () => {
  it('should match snapshot', () => {
    const skeleton = render(<MessageCheapSkeleton />);
    expect(skeleton).toMatchSnapshot();
  });

  it('should render skeleton structure', () => {
    const { container } = render(<MessageCheapSkeleton />);

    const skeletonElements = container.querySelectorAll('.animate-pulse');
    expect(skeletonElements.length).toBeGreaterThan(0);
  });

  it('should have proper border styling', () => {
    const { container } = render(<MessageCheapSkeleton />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('border-b');
    expect(wrapper.className).toContain('border-gray-5');
  });
});
