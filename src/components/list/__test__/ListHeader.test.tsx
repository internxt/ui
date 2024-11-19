import React, { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import ListHeader from '../ListHeader';

const mockOnTopSelectionCheckboxClick = vi.fn();
const mockOnOrderableColumnClicked = vi.fn();

const renderListHeader = (props = {}) =>
  render(
    <ListHeader
      selectedItems={[]}
      items={[
        { id: 1, name: 'name1' },
        { id: 2, name: 'name2' },
      ]}
      header={[
        {
          label: 'Column 1',
          width: '100px',
          name: 'id',
          orderable: true,
          defaultDirection: 'ASC',
        },
        {
          label: 'Column 2',
          width: '200px',
          name: 'name',
          orderable: false,
        },
      ]}
      isVerticalScrollbarVisible={true}
      onTopSelectionCheckboxClick={mockOnTopSelectionCheckboxClick}
      onOrderableColumnClicked={mockOnOrderableColumnClicked}
      {...props}
    />,
  );

describe('ListHeader', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    const listHeader = renderListHeader();
    expect(listHeader).toMatchSnapshot();
  });

  it('should render the columns correctly', () => {
    renderListHeader();

    expect(screen.getByText('Column 1')).toBeInTheDocument();
    expect(screen.getByText('Column 2')).toBeInTheDocument();
  });

  it('should toggle the checkbox state when clicked', () => {
    renderListHeader();

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockOnTopSelectionCheckboxClick).toHaveBeenCalledTimes(1);
  });

  it('should call onOrderableColumnClicked when clicking on an orderable column', () => {
    const { getByText } = renderListHeader();
    const column = getByText('Column 1');

    fireEvent.click(column);

    expect(mockOnOrderableColumnClicked).toHaveBeenCalledTimes(1);
    expect(mockOnOrderableColumnClicked).toHaveBeenCalledWith({
      label: 'Column 1',
      width: '100px',
      name: 'id',
      orderable: true,
      defaultDirection: 'ASC',
    });
  });

  it('should not call onOrderableColumnClicked for non-orderable columns', () => {
    const { getByText } = renderListHeader();
    const column = getByText('Column 2');

    fireEvent.click(column);

    expect(mockOnOrderableColumnClicked).not.toHaveBeenCalled();
  });
});
