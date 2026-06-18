import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { UsageWarningBanner, UsageWarningBannerProps } from '../';

const renderBanner = (overrides: Partial<UsageWarningBannerProps> = {}) => {
  const props: UsageWarningBannerProps = {
    title: 'Storage almost full',
    description: 'You are running out of space',
    usage: '10 GB',
    limit: '20 GB',
    percentage: 50,
    upgradeLabel: 'Upgrade now',
    closeButtonLabel: 'Close',
    onUpgradeClick: vi.fn(),
    onCloseButtonClick: vi.fn(),
    isLoading: false,
    ...overrides,
  };

  return { props, ...render(<UsageWarningBanner {...props} />) };
};

describe('UsageWarningBanner', () => {
  it('colours the progress bar with the style chosen by the consumer', () => {
    const { container } = renderBanner({ barClassName: 'bg-danger' });

    expect(container.querySelector('.bg-danger')).toBeTruthy();
  });

  it('fills the bar in proportion to the storage used', () => {
    const { container } = renderBanner({ barClassName: 'bg-yellow-60', percentage: 73 });

    const bar = container.querySelector<HTMLElement>('.bg-yellow-60');
    expect(bar?.style.width).toBe('73%');
  });

  it('renders the rich description provided by the consumer', () => {
    renderBanner({
      description: (
        <p>
          You have used <strong>90%</strong> of your storage
        </p>
      ),
    });

    expect(screen.getByText('90%').tagName).toBe('STRONG');
  });

  it('shows a loading placeholder instead of the usage figures while data loads', () => {
    const { container } = renderBanner({ isLoading: true });

    expect(container.querySelectorAll('.animate-pulse').length).toBeGreaterThan(0);
    expect(screen.queryByText('10 GB')).toBeNull();
    expect(screen.queryByText('20 GB')).toBeNull();
  });

  it('shows the used and total storage once data has loaded', () => {
    renderBanner({ isLoading: false });

    expect(screen.getByText('10 GB')).toBeTruthy();
    expect(screen.getByText('20 GB')).toBeTruthy();
  });

  it('notifies the parent when the user chooses to upgrade', () => {
    const onUpgradeClick = vi.fn();
    renderBanner({ onUpgradeClick });

    screen.getByRole('button', { name: 'Upgrade now' }).click();

    expect(onUpgradeClick).toHaveBeenCalledOnce();
  });

  it('notifies the parent when the user dismisses the banner', () => {
    const onCloseButtonClick = vi.fn();
    renderBanner({ onCloseButtonClick, closeButtonLabel: 'Close' });

    screen.getByRole('button', { name: 'Close' }).click();

    expect(onCloseButtonClick).toHaveBeenCalledOnce();
  });
});
