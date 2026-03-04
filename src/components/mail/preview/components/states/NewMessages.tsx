interface NewMessagesProps {
  newMessagesCount: number;
}

export const NewMessages = ({ newMessagesCount }: NewMessagesProps) => (
  <div className="flex flex-col items-center w-full h-full justify-center">
    <div className="flex flex-col bg-gray-1 rounded-lg p-10 items-center">
      <img
        src="../../../../../../src/assets/icons/mail/new-message.svg"
        width={138}
        height={138}
        alt="New messages icon"
      />
      <div className="py-0.5 px-2.5 flex rounded-full bg-gray-10 w-max items-center">
        <p className="text-lg font-medium text-gray-60">{newMessagesCount}</p>
      </div>
      <p className="text-gray-80 font-semibold">Unread messages</p>
      <p className="font-medium text-gray-50">Click any email to preview</p>
    </div>
  </div>
);
