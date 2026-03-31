import React from 'react';
import { describe, expect, it } from 'vitest';
import { Checkbox } from '../';
import { render } from '@testing-library/react';

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
});
