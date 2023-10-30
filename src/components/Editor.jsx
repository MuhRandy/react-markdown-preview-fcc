import { IconEdit } from '@tabler/icons-react';
import Header from './Header';
import clsx from 'clsx';
import { cn } from '../utils';

const Editor = ({
  maximizeEditor,
  maximizePreview,
  sideBySide,
  handleChange,
  handleClick,
  input,
}) => {
  return (
    <div
      className={clsx('shadow-sm shadow-black', {
        hidden: maximizePreview,
      })}
    >
      <Header
        handleClick={handleClick}
        maximize={maximizeEditor}
        icon={<IconEdit className="absolute left-0" />}
        text={'Editor'}
      />
      <textarea
        className={cn('min-w-[100vw] px-1 min-h-[40vh]', 'sm:min-w-[90vw]', {
          'min-h-[95vh]': maximizeEditor,
          'sm:min-w-[50vw]': sideBySide,
        })}
        name="editor"
        id="editor"
        onChange={handleChange}
        value={input}
      />
    </div>
  );
};

export default Editor;
