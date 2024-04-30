import React from 'react';
import { describe, expect, it } from 'vitest';
import Checkbox from '../Checkbox';
import renderer from 'react-test-renderer';

describe('Button component', () => {
  it('Checkbox disabled and not checked should render correctly', () => {
    const button = renderer.create(<Checkbox disabled={true} checked={false} />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Checkbox enabled and not checked should render correctly', () => {
    const button = renderer.create(<Checkbox checked={false} />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Checkbox checked should render correctly', () => {
    const button = renderer.create(<Checkbox checked={true} />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Checkbox disabled and checked should render correctly', () => {
    const button = renderer.create(<Checkbox disabled={true} checked={true} />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Checkbox enabled and indetermiante should render correctly', () => {
    const button = renderer.create(<Checkbox checked="indeterminate" />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Checkbox disabled and indetermiante should render correctly', () => {
    const button = renderer.create(<Checkbox disabled={true} checked="indeterminate" />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
