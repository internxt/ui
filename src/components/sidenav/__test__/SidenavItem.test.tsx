import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SidenavItem from '../SidenavItem';

const MockIcon = React.forwardRef<SVGSVGElement, { size?: number | string; weight?: string }>(({ size = 20 }, ref) => (
  <svg ref={ref} data-testid="mock-icon" width={size} height={size} />
));
MockIcon.displayName = 'MockIcon';

describe('SidenavItem Component', () => {
  it('renders correctly with default optional props', () => {
    const { getByText, getByTestId } = render(<SidenavItem label="Dashboard" Icon={MockIcon} />);
    
    expect(getByText('Dashboard')).toBeInTheDocument();
    expect(getByTestId('mock-icon')).toBeInTheDocument();
    
    // Default inactive state includes text-gray-80
    expect(getByText('Dashboard').parentElement).toHaveClass('text-gray-80');
  });

  it('renders subsection with correct styling', () => {
    const { getByRole } = render(<SidenavItem label="Settings" Icon={MockIcon} subsection={true} />);
    const button = getByRole('button');
    expect(button).toHaveClass('pl-5');
  });
});
