import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { SwitchComponent } from '../Switch';

describe('Switch component', () => {
  it('Switch onClick should be called correctly', () => {
    const switchClick = vi.fn();
    render(<SwitchComponent size="md" onClick={switchClick} />);
    const switchComponent = screen.getByTestId('switch');
    switchComponent.click();
    expect(switchClick).toHaveBeenCalledOnce();
  });

  it('Switch onCheckedChange should be called with the correct value', async () => {
    const onCheckedChangeMock = vi.fn(); // Crea un mock para onCheckedChange
    render(<SwitchComponent size="md" onCheckedChange={onCheckedChangeMock} />);

    const switchComponent = screen.getByTestId('switch');

    await userEvent.click(switchComponent);

    expect(onCheckedChangeMock).toHaveBeenCalledWith(true);

    await userEvent.click(switchComponent);

    expect(onCheckedChangeMock).toHaveBeenCalledWith(false);
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
