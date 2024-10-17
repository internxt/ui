import React from 'react';
import { describe, expect, it } from 'vitest';
import Input from '../Input';
import { render } from '@testing-library/react';

describe('Button component', () => {
  it('Input type text disabled render correctly', () => {
    const button = render(<Input disabled={true} />);
    expect(button).toMatchSnapshot();
  });

  it('Input type text enabled should render correctly', () => {
    const button = render(<Input />);
    expect(button).toMatchSnapshot();
  });

  it('Input type text enabled with placeholder should render correctly', () => {
    const button = render(<Input placeholder="Placeholder" />);
    expect(button).toMatchSnapshot();
  });

  it('Input type text enabled with accent color red should render correctly', () => {
    const button = render(<Input accentColor="red" />);
    expect(button).toMatchSnapshot();
  });

  it('Input type text enabled with accent color orange should render correctly', () => {
    const button = render(<Input accentColor="orange" />);
    expect(button).toMatchSnapshot();
  });

  it('Input type text enabled with accent color green should render correctly', () => {
    const button = render(<Input accentColor="green" />);
    expect(button).toMatchSnapshot();
  });

  it('Input type password enabled should render correctly', () => {
    const button = render(<Input type="password" />);
    expect(button).toMatchSnapshot();
  });
});
