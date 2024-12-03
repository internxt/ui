import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { RangeSlider } from '../';

describe('RangeSlider component', () => {
  it('RangeSlider onChange should work correctly', () => {
    const handleChange = vi.fn();
    render(<RangeSlider value={50} max={100} onChange={handleChange} />);

    const slider = screen.getByRole('slider');

    fireEvent.input(slider, { target: { value: '75' } });

    expect(handleChange).toHaveBeenCalledOnce();
    expect(handleChange).toHaveBeenCalledWith(75);
  });

  it('RangeSlider component should render correctly', () => {
    const { container } = render(<RangeSlider value={50} max={100} onChange={() => {}} />);
    expect(container).toMatchSnapshot();
  });
});
