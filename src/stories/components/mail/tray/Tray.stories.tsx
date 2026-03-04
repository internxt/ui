import { useState } from 'react';
import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { Tray } from '../../../../components/mail/tray/Tray';
import { emailMocks } from '../../../../components/mail/mocks';

const overlay: Decorator = (Story) => (
  <div style={{ minHeight: '300px', maxWidth: '400px' }}>
    <Story />
  </div>
);

const meta: Meta<typeof Tray> = {
  title: 'Components(Email)/Tray',
  component: Tray,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [overlay],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState<boolean>(false);
    const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
    const [activeEmail, setActiveEmail] = useState<string>('');

    const handleSelectAll = () => {
      if (checked) {
        // Unselect all emails
        setSelectedEmails([]);
      } else {
        // Select all emails
        setSelectedEmails(emailMocks.emailsWithMultipleRecipients.map((email) => email.id));
      }
      setChecked(!checked);
    };

    const handleMailSelected = (id: string) => {
      if (selectedEmails.includes(id)) {
        // Deselect the email
        setSelectedEmails(selectedEmails.filter((emailId) => emailId !== id));
      } else {
        // Select the email
        setSelectedEmails([...selectedEmails, id]);
      }
    };

    return (
      <div className="flex justify-center items-center w-full">
        <Tray
          mails={emailMocks.emailsWithMultipleRecipients}
          checked={checked}
          selectedEmails={selectedEmails}
          activeEmail={activeEmail}
          handleSelectAll={handleSelectAll}
          onMailSelected={(id) => {
            setActiveEmail(id);
            handleMailSelected(id);
          }}
        />
      </div>
    );
  },
};
