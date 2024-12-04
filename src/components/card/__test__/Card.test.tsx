import React from 'react';
import { render } from '@testing-library/react';
import { Card } from '../';
import { describe, expect, it } from 'vitest';

describe('Card Component', () => {
  const renderCard = (props = {}) =>
    render(
      <Card {...props}>
        <h3>Test Card</h3>
        <p>Card content</p>
      </Card>,
    );

  it('should match snapshot', () => {
    const card = renderCard();
    expect(card).toMatchSnapshot();
  });

  it('should render the content passed as children', () => {
    const { getByText } = renderCard();
    expect(getByText('Test Card')).toBeInTheDocument();
    expect(getByText('Card content')).toBeInTheDocument();
  });

  it('should apply the default className', () => {
    const { container } = renderCard();
    expect(container.firstChild).toHaveClass(
      'rounded-xl border border-gray-10 bg-surface p-5 shadow-[0_12px_20px_0_rgba(0,0,0,0.02)] dark:bg-gray-1',
    );
  });

  it('should append custom className to the default styles', () => {
    const { container } = renderCard({ className: 'custom-class' });
    expect(container.firstChild).toHaveClass('custom-class');
    expect(container.firstChild).toHaveClass(
      'rounded-xl border border-gray-10 bg-surface p-5 shadow-[0_12px_20px_0_rgba(0,0,0,0.02)] dark:bg-gray-1',
    );
  });
});
