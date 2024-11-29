import { render, fireEvent, waitFor } from '@testing-library/react';
import Tooltip, { TooltipProps } from '../Tooltip';
import { expect } from 'chai';
import React, { Children } from 'react';
import { describe, afterEach, vi, it } from 'vitest';

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
    const { getByText } = renderLoader();

    const trigger = getByText('Hover me');
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(getByText('Tooltip Title')).toBeVisible();
    });
  });

  it('hides the tooltip on mouse leave without delay', async () => {
    const { getByText, queryByText } = renderLoader();

    const trigger = getByText('Hover me');
    fireEvent.mouseEnter(trigger);
    fireEvent.mouseLeave(trigger);

    const element = queryByText('Tooltip Title')?.parentElement?.parentElement;

    await waitFor(() => {
      expect(element).toHaveClass('opacity-0');
    });
  });

  it('applies delay before hiding tooltip when delayInMs is set', async () => {
    const { getByText, queryByText } = renderLoader({ delayInMs: 100 });

    const trigger = getByText('Hover me');
    fireEvent.mouseEnter(trigger);
    fireEvent.mouseLeave(trigger);

    const element = queryByText('Tooltip Title')?.parentElement?.parentElement;

    await waitFor(() => {
      expect(element).toHaveClass('opacity-100');
    });

    await waitFor(
      () => {
        expect(element).toHaveClass('opacity-0');
      },
      { timeout: 300 },
    );
  });

  it('renders subtitle if provided', () => {
    const { getByText } = renderLoader({ subtitle: 'Tooltip Subtitle' });

    fireEvent.mouseEnter(getByText('Hover me'));

    expect(getByText('Tooltip Subtitle')).toBeVisible();
  });

  it('renders the arrow by default', () => {
    const { getByText, getByTestId } = renderLoader();

    fireEvent.mouseEnter(getByText('Hover me'));
    const arrow = getByTestId('tooltip-arrow');

    expect(arrow).toBeInTheDocument();
  });

  it('does not render the arrow if `arrow` is false', () => {
    const { getByText, queryByTestId } = renderLoader({ arrow: false });

    fireEvent.mouseEnter(getByText('Hover me'));
    const arrow = queryByTestId('tooltip-arrow');

    expect(arrow).not.toBeInTheDocument();
  });

  it('applies the correct position when popsFrom is top', () => {
    const { getByText } = renderLoader();

    fireEvent.mouseEnter(getByText('Hover me'));

    const tooltip = getByText('Tooltip Title').parentElement?.parentElement;

    expect(tooltip).toHaveClass('bottom-full');
  });

  it('applies the correct position when popsFrom is bottom', () => {
    const { getByText } = renderLoader({ popsFrom: 'bottom' });

    fireEvent.mouseEnter(getByText('Hover me'));

    const tooltip = getByText('Tooltip Title').parentElement?.parentElement;

    expect(tooltip).toHaveClass('top-full');
  });

  it('applies the correct position when popsFrom is left', () => {
    const { getByText } = renderLoader({ popsFrom: 'left' });

    fireEvent.mouseEnter(getByText('Hover me'));

    const tooltip = getByText('Tooltip Title').parentElement?.parentElement;

    expect(tooltip).toHaveClass('right-full');
  });

  it('applies the correct position when popsFrom is right', () => {
    const { getByText } = renderLoader({ popsFrom: 'right' });

    fireEvent.mouseEnter(getByText('Hover me'));

    const tooltip = getByText('Tooltip Title').parentElement?.parentElement;

    expect(tooltip).toHaveClass('left-full');
  });

  it('applies custom className if provided', () => {
    const { getByText } = renderLoader({ className: 'custom-class' });

    const container = getByText('Hover me').parentElement;

    expect(container).toHaveClass('custom-class');
  });

  it('should clear the timeout on mouse enter', () => {
    const clearTimeoutMock = vi.fn();
    global.clearTimeout = clearTimeoutMock;

    const { getByText } = renderLoader({ delayInMs: 100 });
    fireEvent.mouseLeave(getByText('Hover me'));
    fireEvent.mouseEnter(getByText('Hover me'));

    expect(clearTimeoutMock).toHaveBeenCalled();
  });
});
