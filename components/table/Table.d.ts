import { default as React } from '../../../node_modules/react';

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    children: React.ReactNode;
    className?: string;
}
interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
    className?: string;
}
interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
    className?: string;
}
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children: React.ReactNode;
    className?: string;
}
interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
    className?: string;
    isHeader?: boolean;
}
export declare const Table: React.FC<TableProps>;
export declare const TableHeader: React.FC<TableHeaderProps>;
export declare const TableBody: React.FC<TableBodyProps>;
export declare const TableRow: React.FC<TableRowProps>;
export declare const TableCell: React.FC<TableCellProps>;
export {};
