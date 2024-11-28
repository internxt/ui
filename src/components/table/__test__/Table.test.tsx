import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Table, TableHeader, TableRow, TableCell, TableBody } from '../Table';

describe('Table', () => {
  it('renders table with default className', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell isHeader>Example 1</TableCell>
            <TableCell isHeader>Example 2</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const tableComponent = screen.getByRole('table');
    expect(tableComponent).toBeInTheDocument();
    expect(tableComponent).toHaveClass('w-full');
    expect(tableComponent).toMatchSnapshot();
  });
});

describe('TableHeader', () => {
  it('renders header with default className', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell isHeader>Example 1</TableCell>
            <TableCell isHeader>Example 2</TableCell>
          </TableRow>
        </TableHeader>
      </Table>,
    );

    const headerComponent = screen.getByRole('rowgroup');
    expect(headerComponent).toBeInTheDocument();
    expect(headerComponent).toHaveClass('bg-gray-1 border-b border-gray-10 text-gray-100 font-semibold');
    expect(headerComponent).toMatchSnapshot();
  });

  it('renders header with custom className', () => {
    render(
      <Table>
        <TableHeader className="custom-header-class">
          <TableRow>
            <TableCell isHeader>Example</TableCell>
          </TableRow>
        </TableHeader>
      </Table>,
    );

    const headerComponent = screen.getByRole('rowgroup');
    expect(headerComponent).toHaveClass('custom-header-class');
  });
});

describe('TableRow', () => {
  it('renders row with default className', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Example</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const rowComponent = screen.getByRole('row');
    expect(rowComponent).toBeInTheDocument();
    expect(rowComponent).toHaveClass('hover:bg-gray-1 border-b border-gray-10 last:border-none text-sm');
    expect(rowComponent).toMatchSnapshot();
  });

  it('renders row with custom className', () => {
    render(
      <Table>
        <TableBody>
          <TableRow className="custom-row-class">
            <TableCell>Example</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const rowComponent = screen.getByRole('row');
    expect(rowComponent).toHaveClass('custom-row-class');
  });

  it('calls onClick when row is clicked', () => {
    const handleClick = vi.fn();
    render(
      <Table>
        <TableBody>
          <TableRow onClick={handleClick}>
            <TableCell>Example</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const row = screen.getByRole('row');
    fireEvent.click(row);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('TableCell', () => {
  it('renders cell with default className', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Example</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const cell = screen.getByRole('cell');
    expect(cell).toBeInTheDocument();
    expect(cell).toHaveClass('p-4');
    expect(cell).toMatchSnapshot();
  });

  it('renders header cell with custom className and isHeader true', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell isHeader className="custom-header-cell">
              Example
            </TableCell>
          </TableRow>
        </TableHeader>
      </Table>,
    );

    const headerCell = screen.getByRole('columnheader');
    expect(headerCell).toHaveClass('custom-header-cell text-left font-medium');
  });

  it('renders regular cell with custom className', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="custom-cell-class">Example</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const cell = screen.getByRole('cell');
    expect(cell).toHaveClass('custom-cell-class');
  });

  it('calls onClick when cell is clicked', () => {
    const handleClick = vi.fn();
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell onClick={handleClick}>Example</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const cell = screen.getByRole('cell');
    fireEvent.click(cell);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
