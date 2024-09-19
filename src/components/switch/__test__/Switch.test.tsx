import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SwitchComponent } from '../Switch';
import renderer from 'react-test-renderer';

describe('Switch component', () => {
  it('Switch onClick should be called correctly', () => {
    const switchClick = vi.fn();
    render(<SwitchComponent size="md" />);
    const switchComponent = screen.getByRole('switch');
    switchComponent.click();
    expect(switchClick).toHaveBeenCalledOnce();
  });

  it('Medium switch should has the correct sizes', () => {
    const switchComponent = renderer.create(<SwitchComponent size="md" />).toJSON();
    const getSwitch = screen.getByRole('switch');
    getSwitch.clientWidth;
    getSwitch.clientHeight;
    expect(switchComponent).toMatchSnapshot();
  });

  it('Medium switch should render correctly', () => {
    const switchComponent = renderer.create(<SwitchComponent size="md" />).toJSON();
    expect(switchComponent).toMatchSnapshot();
  });

  it('Medium switch disabled should render correctly', () => {
    const switchComponent = renderer.create(<SwitchComponent disabled size="md" />).toJSON();
    expect(switchComponent).toMatchSnapshot();
  });

  it('Large switch should render correctly', () => {
    const switchComponent = renderer.create(<SwitchComponent size="lg" />).toJSON();
    expect(switchComponent).toMatchSnapshot();
  });

  it('Large switch disabled should render correctly', () => {
    const switchComponent = renderer.create(<SwitchComponent disabled size="lg" />).toJSON();
    expect(switchComponent).toMatchSnapshot();
  });

  it('Extra Large switch should render correctly', () => {
    const switchComponent = renderer.create(<SwitchComponent size="xl" />).toJSON();
    expect(switchComponent).toMatchSnapshot();
  });

  it('Extra Large switch disabled should render correctly', () => {
    const switchComponent = renderer.create(<SwitchComponent disabled size="xl" />).toJSON();
    expect(switchComponent).toMatchSnapshot();
  });
});
