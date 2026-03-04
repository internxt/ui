import { useEffect, useState } from 'react';
import { emailMocks, EmailProps, updateEmailReadStatus } from '../mocks';
import { Preview } from '../preview/Preview';
import { Sidenav } from '../sidenav/Sidenav';
import { Tray } from '../tray/Tray';
import { NewMailDialog } from '../newMailDialog/NewMailDialog';

export const MailView = () => {
  const mockedMails = emailMocks.emailsWithMultipleRecipients;
  const [openNewMessageDialog, setOpenNewMessageDialog] = useState<boolean>(false);
  const [mails, setMails] = useState<EmailProps[]>([]);
  const [isFetchingMails, setIsFetchingMails] = useState<boolean>(false);
  const [mailSelected, setMailSelected] = useState<EmailProps>();
  const [checked, setChecked] = useState<boolean>(false);
  const [activeEmail, setActiveEmail] = useState<string | undefined>();
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [onNewMailChange, setOnNewMailChange] = useState<unknown>();

  useEffect(() => {
    setIsFetchingMails(true);
    setTimeout(() => {
      setMails(mockedMails);
      setIsFetchingMails(false);
    }, 1500);
  }, []);

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
      <Sidenav onNewMessageClicked={() => setOpenNewMessageDialog(true)} />
      {openNewMessageDialog && (
        <NewMailDialog
          onPrimaryAction={() => {}}
          title="New message"
          isOpen={openNewMessageDialog}
          onClose={() => setOpenNewMessageDialog(false)}
          onMailChange={(e) => setOnNewMailChange(e.target.value)}
          mailValue={onNewMailChange as string}
        />
      )}
      <Tray
        mails={mails}
        activeEmail={activeEmail as string}
        loading={isFetchingMails}
        checked={checked}
        handleSelectAll={handleSelectAll}
        selectedEmails={selectedEmails}
        onMailSelected={handleOnMessageClicked}
      />
      <Preview
        mailSelected={mailSelected}
        isFetchingMails={isFetchingMails}
        newMessagesCount={mails.filter((mail) => mail.read).length}
      />
    </div>
  );
};
