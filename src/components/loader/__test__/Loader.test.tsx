import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import { afterEach, describe, it, vi } from 'vitest';
import { Loader } from '../';

describe('Loader Component', () => {
  const renderLoader = (props = {}) => {
    return render(<Loader {...props} />);
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    const loader = renderLoader();
    expect(loader).toMatchSnapshot();
  });

  it('renders a spinner loader by default', () => {
    const { getByRole } = renderLoader();
    const spinner = getByRole('img', { hidden: true });
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('animate-spin');
  });

  it('renders a pulse loader when type is "pulse"', () => {
    const { getByText } = renderLoader({ type: 'pulse' });
    const pulseLoader = getByText('', { selector: '.loader06' });
    expect(pulseLoader).toBeInTheDocument();
  });

  it('renders the provided text below the spinner loader', () => {
    const text = 'Loading data...';
    const { getByText } = renderLoader({ text });
    const textElement = getByText(text);
    expect(textElement).toBeInTheDocument();
  });

  it('renders the provided text below the pulse loader', () => {
    const text = 'Loading data...';
    const { getByText } = renderLoader({ type: 'pulse', text });
    const textElement = getByText(text);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass('loader-text');
  });

  it('applies custom class to the container', () => {
    const customClass = 'custom-container';
    const { container } = renderLoader({ classNameContainer: customClass });
    expect(container.firstChild).toHaveClass(customClass);
  });

  it('applies custom class to the loader', () => {
    const customClass = 'custom-loader';
    const { container } = renderLoader({ classNameLoader: customClass });
    const loader = container.firstChild?.firstChild;
    expect(loader).toHaveClass(customClass);
  });

  it('renders with the correct size for the spinner', () => {
    const size = 64;
    const { getByRole } = renderLoader({ size });
    const spinner = getByRole('img', { hidden: true });
    expect(spinner).toHaveAttribute('width', `${size}`);
    expect(spinner).toHaveAttribute('height', `${size}`);
  });

  it('does not render text if none is provided', () => {
    const { queryByText } = renderLoader();
    const textElement = queryByText(/./);
    expect(textElement).toBeNull();
  });
});
