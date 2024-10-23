import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { RangeSlider } from '../RangeSlider';

describe('RangeSlider component', () => {
  it('RangeSlider onChange should work correctly', () => {
    const handleChange = vi.fn();
    render(<RangeSlider value={50} max={100} onChange={handleChange} />);

    const slider = screen.getByRole('slider');

    // Cambiamos el valor del slider
    fireEvent.change(slider, { target: { value: '75' } });

    expect(handleChange).toHaveBeenCalledOnce();
    expect(handleChange).toHaveBeenCalledWith(75);
  });

  it('RangeSlider component should set the progress correctly on mount', () => {
    render(<RangeSlider value={50} max={100} onChange={() => {}} />);
    const slider = screen.getByRole('slider');

    // Comprobamos que la propiedad CSS --progress se haya establecido correctamente
    expect(slider.style.getPropertyValue('--progress')).toBe('50%');
  });

  it('RangeSlider component should render correctly', () => {
    const { container } = render(<RangeSlider value={50} max={100} onChange={() => {}} />);
    expect(container).toMatchSnapshot();
  });
});
