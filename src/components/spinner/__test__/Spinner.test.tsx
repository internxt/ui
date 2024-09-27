import React from 'react';
import { describe, expect, it } from 'vitest';
import Spinner from '../Spinner';
import { render } from '@testing-library/react';

describe('Spinner component', () => {
  it('Primary button should render correctly', () => {
    const spinner = render(<Spinner size={20} />);
    expect(spinner).toMatchSnapshot();
  });
});
