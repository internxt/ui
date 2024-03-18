import { useState } from 'react';
import { emailMocks, EmailProps, updateEmailReadStatus } from '../mocks';
import { Preview } from '../preview/Preview';
import { Sidenav } from '../sidenav/Sidenav';
import { Tray } from '../tray/Tray';

export const MailView = () => {
  const mails = emailMocks.emailsWithMultipleRecipients;
  const [mailSelected, setMailSelected] = useState<EmailProps>();
  const [checked, setChecked] = useState<boolean>(false);
  const [activeEmail, setActiveEmail] = useState<string | undefined>();
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);

  const handleOnMessageClicked = (id: string) => {
    const selectedMail = mails.filter((mail) => id === mail.id)[0];
    updateEmailReadStatus(emailMocks, id, false);
    setMailSelected(selectedMail);
    setActiveEmail(id);
    setSelectedEmails([id]);
  };

  const handleSelectAll = () => {
    if (checked) {
      setSelectedEmails([]);
    } else {
      const allEmailIds = emailMocks.basicEmails.map((email) => email.id);
      setSelectedEmails(allEmailIds);
    }
    setChecked(!checked);
  };

  return (
    <div className="flex flex-row h-screen w-screen">
      <Sidenav />
      <Tray
        mails={mails}
        activeEmail={activeEmail as string}
        checked={checked}
        handleSelectAll={handleSelectAll}
        selectedEmails={selectedEmails}
        onMailSelected={handleOnMessageClicked}
      />
      {mailSelected && <Preview email={mailSelected} />}
    </div>
  );
};
