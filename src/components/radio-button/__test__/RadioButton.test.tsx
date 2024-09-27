import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RadioButton } from '../RadioButton';

describe('Radio Button component', () => {
  it('Radio button onClick should work correctly', () => {
    let checked = false;
    const buttonClick = vi.fn(() => (checked = true));
    render(<RadioButton checked={checked} onClick={buttonClick} />);
    const radioButton = screen.getByRole('button');
    radioButton.click();
    expect(buttonClick).toHaveBeenCalledOnce();
  });

  it('Radio Button component should render correctly', () => {
    const radioButton = render(<RadioButton checked={false} onClick={() => undefined} />);
    expect(radioButton).toMatchSnapshot();
  });

  it('Checked Radio Button component should render correctly', () => {
    const radioButton = render(<RadioButton checked onClick={() => undefined} />);
    expect(radioButton).toMatchSnapshot();
  });

  it('Disabled Radio Button component should render correctly', () => {
    const radioButton = render(<RadioButton disabled checked={false} onClick={() => undefined} />);
    expect(radioButton).toMatchSnapshot();
  });

  it('Disabled and Checked Radio Button component should render correctly', () => {
    const radioButton = render(<RadioButton disabled checked={false} onClick={() => undefined} />);
    expect(radioButton).toMatchSnapshot();
  });
});
