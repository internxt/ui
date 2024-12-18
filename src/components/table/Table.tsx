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

export const Table: React.FC<TableProps> = ({ children, className, ...props }) => (
  <div className={className}>
    <table className="w-full" {...props}>
      {children}
    </table>
  </div>
);

export const TableHeader: React.FC<TableHeaderProps> = ({ children, className, ...props }) => (
  <thead className={className} {...props}>
    {children}
  </thead>
);

export const TableBody: React.FC<TableBodyProps> = ({ children, className, ...props }) => (
  <tbody className={className} {...props}>
    {children}
  </tbody>
);

export const TableRow: React.FC<TableRowProps> = ({ children, className, onClick, ...props }) => (
  <tr onClick={onClick} className={className} {...props}>
    {children}
  </tr>
);

export const TableCell: React.FC<TableCellProps> = ({ children, className, isHeader = false, onClick, ...props }) => {
  const Component = isHeader ? 'th' : 'td';
  return (
    <Component onClick={onClick} className={className} {...props}>
      {children}
    </Component>
  );
};
