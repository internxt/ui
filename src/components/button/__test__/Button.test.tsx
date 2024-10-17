import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button component', () => {
  it('Button onClick should be called correctly', () => {
    const buttonClick = vi.fn();
    render(<Button variant="primary" onClick={buttonClick} />);
    const button = screen.getByRole('button');
    button.click();
    expect(buttonClick).toHaveBeenCalledOnce();
  });

  it('Primary button should render correctly', () => {
    const button = render(<Button variant="primary">Primary</Button>);
    expect(button).toMatchSnapshot();
  });

  it('Secondary button should render correctly', () => {
    const button = render(<Button variant="secondary">Secondary</Button>);
    expect(button).toMatchSnapshot();
  });

  it('Ghost button should render correctly', () => {
    const button = render(<Button variant="ghost">Ghost</Button>);
    expect(button).toMatchSnapshot();
  });

  it('Destructive button should render correctly', () => {
    const button = render(<Button variant="destructive">Destructive</Button>);
    expect(button).toMatchSnapshot();
  });

  it('Primary disabled button should render correctly', () => {
    const button = render(<Button variant="primary" disabled />);
    expect(button).toMatchSnapshot();
  });

  it('Secondary disabled button should render correctly', () => {
    const button = render(<Button variant="secondary" disabled />);
    expect(button).toMatchSnapshot();
  });

  it('Ghost disabled button should render correctly', () => {
    const button = render(<Button variant="ghost" disabled />);
    expect(button).toMatchSnapshot();
  });

  it('Destructive disabled button should render correctly', () => {
    const button = render(<Button variant="destructive" disabled />);
    expect(button).toMatchSnapshot();
  });

  it('Primary medium button should render correctly', () => {
    const button = render(<Button variant="primary" size="medium" />);
    expect(button).toMatchSnapshot();
  });

  it('Primary loading button should render correctly', () => {
    const button = render(<Button variant="primary" loading />);
    expect(button).toMatchSnapshot();
  });

  it('Primary submit button should render correctly', () => {
    const button = render(<Button variant="primary" type="submit" />);
    expect(button).toMatchSnapshot();
  });
});
