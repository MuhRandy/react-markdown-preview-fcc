import { IconBlockquote } from "@tabler/icons-react";
import Header from "./Header";
import clsx from "clsx";

const Preview = ({
  maximizeEditor,
  maximizePreview,
  markdown,
  handleClick,
}) => {
  return (
    <div
      className={clsx("min-w-[800px] shadow-lg shadow-black", {
        hidden: maximizeEditor,
      })}
    >
      <Header
        handleClick={handleClick}
        maximize={maximizePreview}
        icon={<IconBlockquote className="absolute left-0" />}
        text={"Preview"}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: markdown }}
        className="prose prose-table:max-w-fit leading-5 max-w-[800px] prose-headings:border-b-2 prose-p:whitespace-pre-wrap bg-slate-200 px-10 py-5 prose-td:border-black prose-td:border prose-td:p-1 prose-th:border-black prose-th:border prose-th:p-1 prose-blockquote:border-l-4 prose-blockquote:border-slate-500 prose-blockquote:ml-10"
      />
    </div>
  );
};

export default Preview;
