import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { BaseDialog } from '../';

describe('BaseDialog', () => {
  const onCloseMock = vi.fn();
  const defaultProps = {
    title: 'Dialog Title',
    subTitle: 'This is a subtitle',
    isOpen: true,
    onClose: onCloseMock,
    children: <div>Dialog content</div>,
  };
  const renderBaseDialog = (props = {}) => render(<BaseDialog {...defaultProps} {...props} />);

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    const baseDialog = renderBaseDialog();
    expect(baseDialog).toMatchSnapshot();
  });

  it('should render the dialog when isOpen is true', () => {
    const { container } = renderBaseDialog();
    expect(container.firstChild).toHaveClass('flex');
  });

  it('should not render the dialog when isOpen is false', () => {
    const { container } = renderBaseDialog({ isOpen: false });
    expect(container.firstChild).toHaveClass('hidden');
  });

  it('should trigger onClose when the close button is clicked', () => {
    const { getByRole } = renderBaseDialog();
    const closeButton = getByRole('button');

    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should apply custom class names correctly', () => {
    const { container } = renderBaseDialog({ classes: 'custom-class' });
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should render the title and subtitle when provided', () => {
    const { getByText } = renderBaseDialog();

    expect(getByText('Dialog Title')).toBeInTheDocument();
    expect(getByText('This is a subtitle')).toBeInTheDocument();
  });

  it('should not render the title div when title is not provided', () => {
    const { container } = renderBaseDialog({ title: undefined });
    const titleDiv = container.querySelector('[title]');
    expect(titleDiv).not.toBeInTheDocument();
  });

  it('should not render the subtitle when subTitle is not provided', () => {
    const { container } = renderBaseDialog({ subTitle: undefined });
    const subTitleElement = container.querySelector('.justify-between.bg-gray-1.p-5');
    expect(subTitleElement).not.toBeInTheDocument();
  });

  it('should render children content inside the dialog', () => {
    const { getByText } = renderBaseDialog();
    expect(getByText('Dialog content')).toBeInTheDocument();
  });

  it('should hide close button when hideCloseButton is true', () => {
    const { queryByRole } = renderBaseDialog({ hideCloseButton: true });
    expect(queryByRole('button')).toBeNull();
  });

  it('should apply the bgColor prop if provided', () => {
    const { container } = renderBaseDialog({ bgColor: 'bg-red' });
    expect(container.firstChild?.firstChild).toHaveClass('bg-red');
  });

  it('should render with rounded-2xl class when dialogRounded is true', () => {
    const { container } = renderBaseDialog({ dialogRounded: true });
    const dialogPanel = container.querySelector('.rounded-2xl');
    expect(dialogPanel).toBeInTheDocument();
  });

  it('should render with rounded-lg and pt-8 classes when dialogRounded is false', () => {
    const { container } = renderBaseDialog({ dialogRounded: false });
    const dialogPanel = container.querySelector('.rounded-lg.pt-8');
    expect(dialogPanel).toBeInTheDocument();
  });
});
