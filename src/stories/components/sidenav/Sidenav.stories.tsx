import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { Sidenav, SidenavProps } from '@/components/sidenav/Sidenav';
import { Button } from '@/components/button';
import {
  TrayIcon,
  PaperPlaneTiltIcon,
  FileIcon,
  TrashIcon,
  CaretDownIcon,
  StarIcon,
  TagIcon,
  NotePencilIcon,
} from '@phosphor-icons/react';

const meta: Meta<typeof Sidenav> = {
  title: 'Components/Sidenav',
  component: Sidenav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onOptionClick: { action: 'optionClicked' },
    onMenuClick: { action: 'menuClicked' },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', width: '256px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<SidenavProps>;

const MAIL_OPTIONS = [
  {
    id: 0,
    title: 'Inbox',
    icon: TrayIcon,
    notifications: 12,
  },
  {
    id: 1,
    title: 'Sent',
    icon: PaperPlaneTiltIcon,
  },
  {
    id: 2,
    title: 'Drafts',
    icon: FileIcon,
    notifications: 3,
  },
  {
    id: 3,
    title: 'Trash',
    icon: TrashIcon,
  },
  {
    id: 4,
    title: 'Labels',
    icon: CaretDownIcon,
  },
  {
    id: 5,
    title: 'Important',
    icon: StarIcon,
    subsection: true,
  },
  {
    id: 6,
    title: 'Work',
    icon: TagIcon,
    subsection: true,
  },
  {
    id: 7,
    title: 'Personal',
    icon: TagIcon,
    subsection: true,
  },
];

const InteractiveSidenav = (args: SidenavProps) => {
  const [{ activeOptionId, showSubsections }, setArgs] = useArgs();

  const handleOptionClick = (optionId: number, isSubsection: boolean) => {
    if (isSubsection) {
      setArgs({ activeOptionId: optionId });
      return;
    }

    if (optionId === 4) {
      setArgs({ activeOptionId: optionId, showSubsections: !showSubsections });
    } else {
      setArgs({ activeOptionId: optionId, showSubsections: false });
    }
  };

  return (
    <Sidenav
      {...args}
      activeOptionId={activeOptionId}
      showSubsections={showSubsections}
      onOptionClick={handleOptionClick}
    />
  );
};

export const Default: Story = {
  render: InteractiveSidenav,
  args: {
    header: {
      logo: 'https://internxt.com/favicon.ico',
      title: 'Mail',
    },
    primaryAction: (
      <Button className="flex flex-row items-center w-full gap-2" onClick={() => console.log('New message clicked')}>
        <NotePencilIcon size={24} />
        <p>New message</p>
      </Button>
    ),
    options: MAIL_OPTIONS,
    activeOptionId: 0,
    showSubsections: false,
    storage: {
      used: '2.8 GB',
      total: '4 GB',
      percentage: 70,
      upgradeLabel: 'Upgrade',
      onUpgradeClick: () => console.log('Upgrade clicked'),
    },
  },
};

export const WithSubsectionsExpanded: Story = {
  render: InteractiveSidenav,
  args: {
    ...Default.args,
    activeOptionId: 4,
    showSubsections: true,
  },
};

export const WithoutPrimaryAction: Story = {
  render: InteractiveSidenav,
  args: {
    ...Default.args,
    primaryAction: undefined,
  },
};

export const WithoutStorage: Story = {
  render: InteractiveSidenav,
  args: {
    ...Default.args,
    storage: undefined,
  },
};

export const HighStorageUsage: Story = {
  render: InteractiveSidenav,
  args: {
    ...Default.args,
    storage: {
      used: '9.5 GB',
      total: '10 GB',
      percentage: 95,
      upgradeLabel: 'Upgrade now',
      onUpgradeClick: () => console.log('Upgrade clicked'),
    },
  },
};

export const Minimal: Story = {
  render: InteractiveSidenav,
  args: {
    header: {
      logo: 'https://internxt.com/favicon.ico',
      title: 'Drive',
    },
    options: [
      { id: 0, title: 'All files', icon: FileIcon },
      { id: 1, title: 'Trash', icon: TrashIcon },
    ],
    activeOptionId: 0,
    showSubsections: false,
  },
};
