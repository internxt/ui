import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Tooltip, TooltipProps } from '../';
import { expect, describe, afterEach, vi, it } from 'vitest';

describe('Tooltip', () => {
  const defaultProps: TooltipProps = {
    title: 'Tooltip Title',
    children: <button>Hover me</button>,
    popsFrom: 'top',
  };
  const renderLoader = (props = {}) => {
    return render(<Tooltip {...defaultProps} {...props} />);
  };

  afterEach(() => {
    vi.clearAllMocks();
    vi.clearAllTimers();
  });

  it('should match snapshot', () => {
    const loader = renderLoader();
    expect(loader).toMatchSnapshot();
  });

  it('renders the children element', () => {
    const { getByText } = renderLoader();
    expect(getByText('Hover me')).toBeInTheDocument();
  });

  it('shows the tooltip on mouse enter', async () => {
    const { getByText, getByTestId } = renderLoader();

    fireEvent.mouseEnter(getByTestId('tooltip-container'));

    await waitFor(() => {
      expect(getByText('Tooltip Title')).toBeVisible();
    });
  });

  it('hides the tooltip on mouse leave without delay', async () => {
    const { getByTestId, getByRole } = renderLoader();

    const container = getByTestId('tooltip-container');
    fireEvent.mouseEnter(container);
    fireEvent.mouseLeave(container);

    await waitFor(() => {
      expect(getByRole('tooltip', { hidden: true })).toHaveClass('opacity-0');
    });
  });

  it('applies delay before hiding tooltip when delayHideInMs is set', async () => {
    const { getByTestId, getByRole } = renderLoader({ delayHideInMs: 100 });

    const container = getByTestId('tooltip-container');
    fireEvent.mouseEnter(container);
    fireEvent.mouseLeave(container);

    const tooltip = getByRole('tooltip');

    await waitFor(() => {
      expect(tooltip).toHaveClass('opacity-100');
    });

    await waitFor(
      () => {
        expect(tooltip).toHaveClass('opacity-0');
      },
      { timeout: 300 },
    );
  });

  it('renders subtitle if provided', () => {
    const { getByText, getByTestId } = renderLoader({ subtitle: 'Tooltip Subtitle' });

    fireEvent.mouseEnter(getByTestId('tooltip-container'));

    expect(getByText('Tooltip Subtitle')).toBeVisible();
  });

  it('renders the arrow by default', () => {
    const { getByTestId } = renderLoader();

    fireEvent.mouseEnter(getByTestId('tooltip-container'));

    expect(getByTestId('tooltip-arrow')).toBeInTheDocument();
  });

  it('does not render the arrow if `arrow` is false', () => {
    const { getByTestId, queryByTestId } = renderLoader({ arrow: false });

    fireEvent.mouseEnter(getByTestId('tooltip-container'));

    expect(queryByTestId('tooltip-arrow')).not.toBeInTheDocument();
  });

  it('applies the correct position when popsFrom is top', () => {
    const { getByRole } = renderLoader();

    const tooltip = getByRole('tooltip', { hidden: true });

    expect(tooltip).toHaveClass('bottom-full');
  });

  it('applies the correct position when popsFrom is bottom', () => {
    const { getByRole } = renderLoader({ popsFrom: 'bottom' });

    const tooltip = getByRole('tooltip', { hidden: true });

    expect(tooltip).toHaveClass('top-full');
  });

  it('applies the correct position when popsFrom is left', () => {
    const { getByRole } = renderLoader({ popsFrom: 'left' });

    const tooltip = getByRole('tooltip', { hidden: true });

    expect(tooltip).toHaveClass('right-full');
  });

  it('applies the correct position when popsFrom is right', () => {
    const { getByRole } = renderLoader({ popsFrom: 'right' });

    const tooltip = getByRole('tooltip', { hidden: true });

    expect(tooltip).toHaveClass('left-full');
  });

  it('applies custom className if provided', () => {
    const { getByTestId } = renderLoader({ className: 'custom-class' });

    expect(getByTestId('tooltip-container')).toHaveClass('custom-class');
  });

  it('should clear the timeout on mouse enter', () => {
    const clearTimeoutMock = vi.fn();
    global.clearTimeout = clearTimeoutMock;

    const { getByTestId } = renderLoader({ delayHideInMs: 100 });
    const container = getByTestId('tooltip-container');
    fireEvent.mouseLeave(container);
    fireEvent.mouseEnter(container);

    expect(clearTimeoutMock).toHaveBeenCalled();
  });

});
