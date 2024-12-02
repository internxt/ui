import { Copy } from '@phosphor-icons/react';
import { useState } from 'react';
import Tooltip from '../tooltip/Tooltip';

interface CopyableProps {
  className?: string;
  classText?: string;
  text: string;
  copiedText?: string;
  copyToClipboardText?: string;
}

/**
 * Copyable component
 *
 * @property {string} [className]
 * - Custom classes for the outer container.
 *
 * @property {string} [classText]
 * - Custom classes for the selected text.
 *
 * @property {string} text
 * - The text content to be displayed and copied to the clipboard.
 *
 * @property {string} copiedText
 * - The text to display in the tooltip when the content has been copied.
 *
 * @property {string} copyToClipboardText
 * - The text to display in the tooltip when the content can be copied to the clipboard.
 */

export default function Copyable({
  className = '',
  classText = 'select-text text-gray-80',
  text,
  copiedText = 'Copied!',
  copyToClipboardText = 'Copy to clipboard',
}: CopyableProps): JSX.Element {
  const [justCopied, setJustCopied] = useState(false);

  async function onCopy() {
    await navigator.clipboard.writeText(text);
    setJustCopied(true);
    setTimeout(() => setJustCopied(false), 1000);
  }

  return (
    <div
      className={`${className} flex h-11 items-center justify-between rounded-md border border-gray-10 bg-gray-5 px-4`}
    >
      <p className={`${classText}`}>{text}</p>
      <Tooltip
        className="ml-6"
        popsFrom="bottom"
        title={justCopied ? copiedText : copyToClipboardText}
        delayInMs={justCopied ? 500 : undefined}
      >
        <button disabled={justCopied} onClick={onCopy}>
          <Copy className="shrink-0 text-gray-50 hover:text-gray-60" size={24} />
        </button>
      </Tooltip>
    </div>
  );
}
