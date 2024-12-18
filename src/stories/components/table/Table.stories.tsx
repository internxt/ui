import { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableRow, TableCell, TableBody } from '../../../components/table/Table';

interface ActivityRow {
  date: string;
  time: string;
  memberName: string;
  memberEmail: string;
  activity: { action: string; color: string };
  access: string;
}

const mockData: ActivityRow[] = [
  {
    date: 'February 6, 2024',
    time: '4:41 PM',
    memberName: 'Daniel Dun',
    memberEmail: 'daniel@internxt.com',
    activity: { action: 'Signed in', color: 'text-green-600' },
    access: 'Web',
  },
  {
    date: 'February 6, 2024',
    time: '4:41 PM',
    memberName: 'Steven S',
    memberEmail: 'stevens@internxt.com',
    activity: { action: 'Changed', color: 'text-orange-500' },
    access: 'Web',
  },
  {
    date: 'February 6, 2024',
    time: '4:41 PM',
    memberName: 'Daniel Dun',
    memberEmail: 'daniel@internxt.com',
    activity: { action: 'Signed out', color: 'text-gray-400' },
    access: 'Web',
  },
];

const meta: Meta = {
  title: 'Components/Table',
  component: Table,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell isHeader>Date</TableCell>
          <TableCell isHeader>
            <div className="flex flex-row gap-6">
              <div className="border border-gray-10" />
              <p>Name</p>
            </div>
          </TableCell>
          <TableCell isHeader>
            <div className="flex flex-row gap-6">
              <div className="border border-gray-10" />
              <p>Activity</p>
            </div>
          </TableCell>
          <TableCell isHeader>
            <div className="flex flex-row gap-6">
              <div className="border border-gray-10" />
              <p>Access</p>
            </div>
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockData.map((item, index) => (
          <TableRow key={index}>
            <TableCell isHeader>{item.date}</TableCell>
            <TableCell className="pl-10">
              <div>{item.memberName}</div>
              <div className="text-sm text-gray-50">{item.memberEmail}</div>
            </TableCell>
            <TableCell className="pl-10">
              <span className={`${item.activity.color} font-medium`}>{item.activity.action}</span>
            </TableCell>
            <TableCell className="pl-10">{item.access}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
