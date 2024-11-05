import React from 'react';

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: unknown) => void;
}

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
  isHeader?: boolean;
  onClick?: (e: unknown) => void;
}

export const Table: React.FC<TableProps> = ({
  children,
  className = 'min-w-full border border-gray-10 rounded-lg overflow-hidden',
}) => (
  <div className={className}>
    <table className="w-full">{children}</table>
  </div>
);

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  className = 'bg-gray-1 border-b border-gray-10 text-gray-100 font-semibold',
}) => <thead className={className}>{children}</thead>;

export const TableRow: React.FC<TableRowProps> = ({
  children,
  className = 'hover:bg-gray-1 border-b border-gray-10 last:border-none text-sm',
  onClick,
}) => (
  <tr onClick={onClick} className={className}>
    {children}
  </tr>
);

export const TableCell: React.FC<TableCellProps> = ({ children, className = 'p-4', isHeader = false, onClick }) => {
  const Component = isHeader ? 'th' : 'td';
  return (
    <Component onClick={onClick} className={`${className} ${isHeader ? 'text-left font-medium' : ''}`}>
      {children}
    </Component>
  );
};
