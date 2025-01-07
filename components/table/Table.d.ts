import { default as React } from '../../../node_modules/react';

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
export declare const Table: React.FC<TableProps>;
/**
 * TableHeader component
 *
 * Represents the header section of the table. Wraps the `<thead>` element.
 * @param {TableHeaderProps} props - The props for the table header component.
 */
export declare const TableHeader: React.FC<TableHeaderProps>;
/**
 * TableBody component
 *
 * Represents the body section of the table. Wraps the `<tbody>` element.
 * @param {TableBodyProps} props - The props for the table body component.
 */
export declare const TableBody: React.FC<TableBodyProps>;
/**
 * TableRow component
 *
 * Represents a single row in the table. Wraps the `<tr>` element.
 * @param {TableRowProps} props - The props for the table row component.
 */
export declare const TableRow: React.FC<TableRowProps>;
/**
 * TableCell component
 *
 * Represents a single cell in the table, either header (`<th>`) or data (`<td>`).
 * @param {TableCellProps} props - The props for the table cell component.
 * @param {boolean} [props.isHeader=false] - Determines if the cell is a header (`<th>`).
 */
export declare const TableCell: React.FC<TableCellProps>;
