import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { Grid } from '../';

describe('Grid component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Grid>Snapshot Test</Grid>);
    expect(container).toMatchSnapshot();
  });

  it('should render children correctly', () => {
    const { getByText } = render(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>
    );
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
  });

  it('should apply the default grid classes', () => {
    const { container } = render(<Grid>Test</Grid>);
    const gridDiv = container.firstChild as HTMLElement;

    expect(gridDiv).toHaveClass('grid');
    expect(gridDiv).toHaveClass('min-w-full');
    expect(gridDiv).toHaveClass('auto-rows-min');
    expect(gridDiv).toHaveClass('grid-cols-2');
  });

  it('should append custom className to the wrapper', () => {
    const { container } = render(<Grid className="custom-class">Test</Grid>);
    const gridDiv = container.firstChild as HTMLElement;

    expect(gridDiv).toHaveClass('custom-class');
    expect(gridDiv).toHaveClass('grid');
  });

  it('should assign id and data-cy correctly', () => {
    const { container } = render(<Grid id="grid-id" dataCy="grid-data-cy">Test</Grid>);
    const gridDiv = container.firstChild as HTMLElement;

    expect(gridDiv).toHaveAttribute('id', 'grid-id');
    expect(gridDiv).toHaveAttribute('data-cy', 'grid-data-cy');
  });
});
