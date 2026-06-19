import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Skeleton } from '../';

describe('Skeleton', () => {
  it('should match snapshot', () => {
    const skeleton = render(<Skeleton />);
    expect(skeleton).toMatchSnapshot();
  });

  it('should render three skeleton items', () => {
    const { container } = render(<Skeleton />);

    const items = container.querySelectorAll('.animate-pulse');
    expect(items).toHaveLength(3);
  });
});
