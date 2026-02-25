import { Icon } from '@phosphor-icons/react';
import { ToolbarButton } from './ToolbarButton';

export interface ToolbarItem {
  id: string;
  icon: Icon;
  onClick: () => void;
  isActive?: boolean;
}

export interface ToolbarGroupProps {
  items: ToolbarItem[];
  disabled?: boolean;
}

export const ToolbarGroup = ({ items, disabled }: ToolbarGroupProps) => (
  <div className="flex flex-row items-center gap-2">
    {items.map((item) => (
      <ToolbarButton key={item.id} onClick={item.onClick} isActive={item.isActive} disabled={disabled}>
        <item.icon size={20} />
      </ToolbarButton>
    ))}
  </div>
);
