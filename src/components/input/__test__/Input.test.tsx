import React from 'react';
import { describe, expect, it } from 'vitest';
import Input from '../Input';
import renderer from 'react-test-renderer';

describe('Button component', () => {
  it('Input type text disabled render correctly', () => {
    const button = renderer.create(<Input disabled={true} />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Input type text enabled should render correctly', () => {
    const button = renderer.create(<Input />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Input type text enabled with placeholder should render correctly', () => {
    const button = renderer.create(<Input placeholder="Placeholder" />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Input type text enabled with accent color red should render correctly', () => {
    const button = renderer.create(<Input accentColor="red" />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Input type text enabled with accent color orange should render correctly', () => {
    const button = renderer.create(<Input accentColor="orange" />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Input type text enabled with accent color green should render correctly', () => {
    const button = renderer.create(<Input accentColor="green" />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Input type password enabled render correctly', () => {
    const button = renderer.create(<Input type="password" />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
