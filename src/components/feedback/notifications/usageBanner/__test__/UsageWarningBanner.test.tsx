import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { UsageWarningBanner, UsageWarningBannerProps } from '../';
import { getStorageLevel } from '../utils';

const renderBanner = (overrides: Partial<UsageWarningBannerProps> = {}) => {
  const props: UsageWarningBannerProps = {
    usage: '10 GB',
    limit: '20 GB',
    percentage: 50,
    titleLabel: 'Storage almost full',
    descriptionLabelLine1: 'You are running out of space',
    descriptionLabelLine2: 'Upgrade to keep saving files',
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
  it('warns with a danger-coloured bar when storage is critically full', () => {
    const { container } = renderBanner({ percentage: 96 });

    expect(container.querySelector('.bg-danger')).toBeTruthy();
  });

  it('warns with an orange bar when storage is nearly full', () => {
    const { container } = renderBanner({ percentage: 85 });

    expect(container.querySelector('.bg-orange-60')).toBeTruthy();
  });

  it('warns with a yellow bar when storage still has room', () => {
    const { container } = renderBanner({ percentage: 40 });

    expect(container.querySelector('.bg-yellow-60')).toBeTruthy();
  });

  it('fills the bar in proportion to the storage used', () => {
    const { container } = renderBanner({ percentage: 73 });

    const bar = container.querySelector<HTMLElement>('.bg-yellow-60');
    expect(bar?.style.width).toBe('73%');
  });

  it('emphasises the portions of the description wrapped in double asterisks', () => {
    renderBanner({ descriptionLabelLine1: 'You have used **90%** of your storage' });

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

describe('getStorageLevel', () => {
  it('flags critical usage from ninety-five percent upwards', () => {
    expect(getStorageLevel(95)).toBe('highWarning');
    expect(getStorageLevel(100)).toBe('highWarning');
  });

  it('flags near-full usage between eighty and ninety-five percent', () => {
    expect(getStorageLevel(80)).toBe('middleWarning');
    expect(getStorageLevel(94)).toBe('middleWarning');
  });

  it('flags moderate usage between sixty and eighty percent as a low warning', () => {
    expect(getStorageLevel(60)).toBe('lowWarning');
    expect(getStorageLevel(79)).toBe('lowWarning');
  });

  it('keeps usage below sixty percent as normal', () => {
    expect(getStorageLevel(0)).toBe('normal');
    expect(getStorageLevel(59)).toBe('normal');
  });
});
