import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../Button';
import renderer from 'react-test-renderer';

describe('Button component', () => {
  it('Button onClick should be called correctly', () => {
    const buttonClick = vi.fn();
    render(<Button variant="primary" onClick={buttonClick} />);
    const button = screen.getByRole('button');
    button.click();
    expect(buttonClick).toHaveBeenCalledOnce();
  });

  it('Primary button should render correctly', () => {
    const button = renderer.create(<Button variant="primary">Primary</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Secondary button should render correctly', () => {
    const button = renderer.create(<Button variant="secondary">Secondary</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Tertiary button should render correctly', () => {
    const button = renderer.create(<Button variant="tertiary">Tertiary</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Accent button should render correctly', () => {
    const button = renderer.create(<Button variant="accent">Accent</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Primary disabled button should render correctly', () => {
    const button = renderer.create(<Button variant="primary" disabled />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Secondary disabled button should render correctly', () => {
    const button = renderer.create(<Button variant="secondary" disabled />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Tertiary disabled button should render correctly', () => {
    const button = renderer.create(<Button variant="tertiary" disabled />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Accent disabled button should render correctly', () => {
    const button = renderer.create(<Button variant="accent" disabled />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Primary medium button should render correctly', () => {
    const button = renderer.create(<Button variant="primary" size="medium" />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Primary loading button should render correctly', () => {
    const button = renderer.create(<Button variant="primary" loading />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Primary submit button should render correctly', () => {
    const button = renderer.create(<Button variant="primary" type="submit" />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
