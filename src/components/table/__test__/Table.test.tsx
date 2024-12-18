import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Table, TableHeader, TableBody, TableRow, TableCell } from '../Table';

describe('Table Component Snapshots', () => {
  it('renders the complete table structure', () => {
    const { container } = render(
      <Table className="custom-table-class">
        <TableHeader className="custom-header-class">
          <TableRow className="custom-row-class">
            <TableCell isHeader className="custom-cell-class">
              Header 1
            </TableCell>
            <TableCell isHeader>Header 2</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody className="custom-body-class">
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
          <TableRow className="another-row-class">
            <TableCell className="another-cell-class">Cell 3</TableCell>
            <TableCell>Cell 4</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a table with minimal structure', () => {
    const { container } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell isHeader>Header</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a row with an onClick handler', () => {
    const handleClick = () => {};
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow onClick={handleClick}>
            <TableCell>Clickable Row Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a cell with custom props', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="custom-class" data-testid="test-cell">
              Custom Cell
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a header cell with isHeader set to true', () => {
    const { container } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell isHeader>Header Cell</TableCell>
          </TableRow>
        </TableHeader>
      </Table>,
    );

    expect(container).toMatchSnapshot();
  });
});
