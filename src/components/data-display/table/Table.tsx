import React from 'react';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
  className?: string;
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
  className?: string;
}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
  className?: string;
}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
  className?: string;
}

export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  className?: string;
  isHeader?: boolean;
}

/**
 * Table component
 *
 * A container for tabular data. Wraps the `<table>` element with a div for additional styling or layout purposes.
 * @param {TableProps} props - The props for the table component.
 */
export const Table: React.FC<TableProps> = ({ children, className, ...props }) => (
  <div className={className}>
    <table className="w-full" {...props}>
      {children}
    </table>
  </div>
);

/**
 * TableHeader component
 *
 * Represents the header section of the table. Wraps the `<thead>` element.
 * @param {TableHeaderProps} props - The props for the table header component.
 */
export const TableHeader: React.FC<TableHeaderProps> = ({ children, className, ...props }) => (
  <thead className={className} {...props}>
    {children}
  </thead>
);

/**
 * TableBody component
 *
 * Represents the body section of the table. Wraps the `<tbody>` element.
 * @param {TableBodyProps} props - The props for the table body component.
 */
export const TableBody: React.FC<TableBodyProps> = ({ children, className, ...props }) => (
  <tbody className={className} {...props}>
    {children}
  </tbody>
);

/**
 * TableRow component
 *
 * Represents a single row in the table. Wraps the `<tr>` element.
 * @param {TableRowProps} props - The props for the table row component.
 */
export const TableRow: React.FC<TableRowProps> = ({ children, className, onClick, ...props }) => (
  <tr onClick={onClick} className={className} {...props}>
    {children}
  </tr>
);

/**
 * TableCell component
 *
 * Represents a single cell in the table, either header (`<th>`) or data (`<td>`).
 * @param {TableCellProps} props - The props for the table cell component.
 * @param {boolean} [props.isHeader=false] - Determines if the cell is a header (`<th>`).
 */
export const TableCell: React.FC<TableCellProps> = ({ children, className, isHeader = false, onClick, ...props }) => {
  const Component = isHeader ? 'th' : 'td';
  return (
    <Component onClick={onClick} className={className} {...props}>
      {children}
    </Component>
  );
};
