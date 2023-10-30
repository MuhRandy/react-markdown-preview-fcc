import { IconBlockquote } from "@tabler/icons-react";
import Header from "./Header";
import clsx from "clsx";
import { cn } from "../utils";

const Preview = ({
  maximizeEditor,
  maximizePreview,
  sideBySide,
  markdown,
  handleClick,
}) => {
  return (
    <div
      className={clsx("shadow-sm shadow-black", {
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
        className={cn(
          "prose prose-sm min-w-[100vw] p-1 leading-5 bg-slate-200",
          [
            [
              "sm:prose-base sm:min-w-[90vw] sm:px-4",
              { "sm:min-w-[40vw] sm:px-1": sideBySide && !maximizePreview },
            ],
            [
              "md:prose-lg md:min-w-[70vw]",
              { "md:min-w-[53vw]": sideBySide && !maximizePreview },
            ],
          ],
          [
            "prose-headings:border-b prose-headings:border-black",
            "prose-p:whitespace-pre-wrap",
            [
              "prose-table:max-w-fit",
              "prose-td:border-black prose-td:border prose-td:p-1",
              "prose-th:border-black prose-th:border prose-th:p-1",
            ],
            "prose-blockquote:border-l-4 prose-blockquote:border-slate-500 prose-blockquote:ml-3",
            "prose-pre:p-0",
            "marker:text-black",
          ]
        )}
      />
    </div>
  );
};

export default Preview;
