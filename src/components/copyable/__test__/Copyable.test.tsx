import { render, fireEvent, waitFor } from '@testing-library/react';
import { Copyable } from '../';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import React from 'react';

describe('Copyable Component', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn(),
      },
    });
  });

  const renderCopyable = (props = {}) => {
    return render(<Copyable text="Text to copy" {...props} />);
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    const copyable = renderCopyable();
    expect(copyable).toMatchSnapshot();
  });

  it('should render the component with default props', () => {
    const { getByText, getByRole } = renderCopyable();
    expect(getByText('Text to copy')).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText('Copy to clipboard')).toBeInTheDocument();
  });

  it('should copy text to the clipboard when the button is clicked', async () => {
    const { getByRole } = renderCopyable();
    const button = getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Text to copy');
    });
  });

  it('should display "Copied!" tooltip text after clicking the button', async () => {
    const { getByText, getByRole } = renderCopyable();
    const button = getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(getByText('Copied!')).toBeInTheDocument();
    });
  });

  it('should disable the button temporarily after copying', async () => {
    const { getByRole } = renderCopyable();
    const button = getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(button).toBeDisabled();
    });

    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
  });

  it('should use custom className and classText when provided', () => {
    const { getByText } = renderCopyable({ className: 'custom-class', classText: 'custom-text-class' });
    const container = getByText('Text to copy').parentElement;
    expect(container).toHaveClass('custom-class');
    expect(getByText('Text to copy')).toHaveClass('custom-text-class');
  });

  it('should use custom tooltip texts when provided', async () => {
    const { getByText, getByRole } = renderCopyable({
      copiedText: 'Custom Copied!',
      copyToClipboardText: 'Custom Copy to clipboard',
    });
    const button = getByRole('button');

    expect(getByText('Custom Copy to clipboard')).toBeInTheDocument();

    fireEvent.click(button);

    await waitFor(() => {
      expect(getByText('Custom Copied!')).toBeInTheDocument();
    });
  });

  it('should render with default className and classText when not provided', () => {
    const { getByText } = renderCopyable();

    const container = getByText('Text to copy').closest('div');
    expect(container).toHaveClass(
      'flex h-11 items-center justify-between rounded-md border border-gray-10 bg-gray-5 px-4',
    );

    const textElement = getByText('Text to copy');
    expect(textElement).toHaveClass('select-text text-gray-80');
  });

  it('should override default className and classText when provided', () => {
    const className = 'custom-container-class';
    const classText = 'custom-text-class';
    const { getByText } = renderCopyable({ className, classText });

    const container = getByText('Text to copy').closest('div');
    expect(container).toHaveClass(className);

    const textElement = getByText('Text to copy');
    expect(textElement).toHaveClass(classText);
  });
});
