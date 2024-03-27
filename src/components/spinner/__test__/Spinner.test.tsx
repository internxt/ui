import React from 'react';
import { describe, expect, it } from 'vitest';
import Spinner from '../Spinner';
import renderer from 'react-test-renderer';

describe('Spinner component', () => {
  it('Primary button should render correctly', () => {
    const spinner = renderer.create(<Spinner size={20} />).toJSON();
    expect(spinner).toMatchSnapshot();
  });
});
