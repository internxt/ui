import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Checkbox } from '../';
import { render, fireEvent } from '@testing-library/react';

describe('Checkbox component', () => {
  it('Checkbox disabled and not checked should render correctly', () => {
    const button = render(<Checkbox disabled={true} checked={false} />);
    expect(button).toMatchSnapshot();
  });

  it('Checkbox enabled and not checked should render correctly', () => {
    const button = render(<Checkbox checked={false} />);
    expect(button).toMatchSnapshot();
  });

  it('Checkbox checked should render correctly', () => {
    const button = render(<Checkbox checked={true} />);
    expect(button).toMatchSnapshot();
  });

  it('Checkbox disabled and checked should render correctly', () => {
    const button = render(<Checkbox disabled={true} checked={true} />);
    expect(button).toMatchSnapshot();
  });

  it('Checkbox enabled and indetermiante should render correctly', () => {
    const button = render(<Checkbox checked={true} indeterminate={true} />);
    expect(button).toMatchSnapshot();
  });

  it('Checkbox disabled and indetermiante should render correctly', () => {
    const button = render(<Checkbox disabled={true} checked={true} indeterminate={true} />);
    expect(button).toMatchSnapshot();
  });

  it('calls onClick when label is clicked and not disabled', () => {
    const handleClick = vi.fn();
    const { container } = render(<Checkbox onClick={handleClick as any} />);
    const label = container.querySelector('label');
    fireEvent.click(label!);
    expect(handleClick).toHaveBeenCalled();
  });

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    const { container } = render(<Checkbox disabled={true} onClick={handleClick as any} />);
    const label = container.querySelector('label');
    fireEvent.click(label!);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('prevents default on inner div click', () => {
    const { container } = render(<Checkbox />);
    const div = container.querySelector('div');
    
    const event = new MouseEvent('click', { bubbles: true, cancelable: true });
    event.preventDefault = vi.fn();
    fireEvent(div!, event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('triggers onKeyDown handlers without errors', () => {
    const { container } = render(<Checkbox />);
    const label = container.querySelector('label');
    const div = container.querySelector('div');
    fireEvent.keyDown(label!, { key: 'Enter' });
    fireEvent.keyDown(div!, { key: 'Enter' });
  });
});
