import React from 'react';
import { describe, expect, it } from 'vitest';
import TextArea from '../TextArea';
import renderer from 'react-test-renderer';

describe('Button component', () => {
  it('TextArea enabled should render correctly', () => {
    const button = renderer.create(<TextArea />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('TextArea enabled with placeholder should render correctly', () => {
    const button = renderer.create(<TextArea placeholder="Placeholder" />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('TextArea enabled with accent color red should render correctly', () => {
    const button = renderer.create(<TextArea accentColor="red" />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('TextArea disabled should render correctly', () => {
    const button = renderer.create(<TextArea disabled={true} />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
