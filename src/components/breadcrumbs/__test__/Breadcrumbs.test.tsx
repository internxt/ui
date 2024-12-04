import React, { act } from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Breadcrumbs, BreadcrumbsProps } from '../';
import { Dispatch, AnyAction } from 'redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

describe('Breadcrumbs Component', () => {
  const mockDispatch: Dispatch<AnyAction> = vi.fn();
  const mockProps: BreadcrumbsProps<typeof mockDispatch> = {
    items: [
      {
        uuid: '1',
        label: 'Home',
        icon: null,
        active: false,
      },
      {
        uuid: '2',
        label: 'Category',
        icon: null,
        active: false,
      },
      {
        uuid: '3',
        label: 'Subcategory',
        icon: null,
        active: false,
      },
      {
        uuid: '4',
        label: 'Product',
        icon: null,
        active: false,
      },
    ],
    rootBreadcrumbItemDataCy: 'breadcrumb-root',
    namePath: [
      { name: 'Home', uuid: '1' },
      { name: 'Category', uuid: '2' },
    ],
    isSomeItemSelected: false,
    selectedItems: [],
    onItemDropped: vi.fn(),
    canItemDrop: vi.fn(),
    itemComponent: undefined,
    acceptedTypes: ['type1', 'type2'],
    dispatch: vi.fn(),
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  const renderBreadcrumbs = () =>
    render(
      <DndProvider backend={HTML5Backend}>
        <Breadcrumbs {...mockProps} />
      </DndProvider>,
    );

  it('should match snapshot', () => {
    const breadcrumbs = renderBreadcrumbs();
    expect(breadcrumbs).toMatchSnapshot();
  });

  it('renders a dropdown menu when more than 4 items are provided', () => {
    const { getByTestId } = renderBreadcrumbs();
    const dropdown = getByTestId('menu-dropdown');
    expect(dropdown).toBeInTheDocument();
  });

  it('renders a dropdown menu for hidden items when there are more than 3 items', () => {
    const { getByRole } = renderBreadcrumbs();
    const dropdownButton = getByRole('button');
    expect(dropdownButton).toBeInTheDocument();
  });

  it('renders separators between breadcrumb items', () => {
    const { getAllByTestId } = renderBreadcrumbs();
    const separators = getAllByTestId('caret-right');
    expect(separators).toHaveLength(3);
  });

  it('opens the dropdown menu when clicked', async () => {
    const { getByRole, getByText } = renderBreadcrumbs();
    const dropdownButton = getByRole('button');
    await act(async () => {
      userEvent.click(dropdownButton);
    });
    const hiddenItem = getByText('Subcategory');
    expect(hiddenItem).toBeInTheDocument();
  });
});
