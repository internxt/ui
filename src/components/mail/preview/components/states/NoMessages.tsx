export const EmptyMessages = () => {
  return (
    <div className="flex flex-col items-center w-full h-full justify-center">
      <div className="flex flex-col bg-gray-1 rounded-lg p-10  items-center">
        <img
          src="../../../../../../src/assets/icons/mail/no-messages.svg"
          width={138}
          height={138}
          alt="New messages icon"
        />
        <p className="text-gray-80 font-semibold">You’re all set!</p>
        <p className="font-medium text-gray-50">There are no unread messages</p>
      </div>
    </div>
  );
};
