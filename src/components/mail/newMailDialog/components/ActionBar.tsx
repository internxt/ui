import {
  ListDashes,
  PaintBucket,
  TextB,
  TextItalic,
  TextStrikethrough,
  TextUnderline,
  ListNumbers,
  TextAlignLeft,
  AlignLeft,
  Image,
  Link,
  Eraser,
} from '@phosphor-icons/react';

const TEXT_STYLE = [
  {
    icon: TextB,
  },
  {
    icon: TextItalic,
  },
  {
    icon: TextUnderline,
  },
  {
    icon: TextStrikethrough,
  },
];

const LIST_STYLE = [
  {
    icon: ListDashes,
  },
  {
    icon: ListNumbers,
  },
];

const TEXT_MODS = [
  {
    icon: AlignLeft,
  },
  {
    icon: Link,
  },
  {
    icon: Eraser,
  },
];

export const ActionBar = () => {
  return (
    <div className="flex flex-row items-center rounded-lg border border-gray-5 bg-gray-1">
      <div className="flex flex-col pl-2 pr-10 py-1.5 items-start">
        <p className="p-1">Arial</p>
      </div>
      <div className="px-3.5 border-r border-l border-gray-10 flex">
        <p className="">14px</p>
      </div>
      <div className="px-4 flex items-center border-r border-gray-10">
        <PaintBucket size={20} />
      </div>
      <div className="flex flex-row items-center px-4 gap-4  border-r border-gray-10">
        {TEXT_STYLE.map((style) => (
          <style.icon size={20} />
        ))}
      </div>
      <div className="flex flex-row items-center px-4 gap-4  border-r border-gray-10">
        {LIST_STYLE.map((style) => (
          <style.icon size={20} />
        ))}
      </div>
      <div className="flex flex-col items-center  border-r border-gray-10 px-4">
        <TextAlignLeft size={20} />
      </div>
      <div className="flex flex-row items-center px-4 gap-4  border-r border-gray-10">
        {TEXT_MODS.map((style) => (
          <style.icon size={20} />
        ))}
      </div>
      <div className="flex flex-col items-center px-3">
        <Image size={20} />
      </div>
    </div>
  );
};
