import { Marked } from "marked";
import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import LayoutToggle from "./components/LayoutToggle";
import { cn } from "./utils";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

function App() {
  const marked = new Marked(
    markedHighlight({
      langPrefix: "hljs language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    })
  );

  marked.use({ breaks: true });

  const defaultMarkdown =
    "# Welcome to my React Markdown Previewer!\n\n" +
    "## This is a sub-heading...\n\n" +
    "### And here's some other cool stuff:\n\n" +
    "Heres some code, `<div></div>`, between 2 backticks.\n\n" +
    "~~~javascript\n" +
    "// this is multi-line code:\n\n" +
    "function anotherExample(firstLine, lastLine) {\n" +
    "  if (firstLine == '```' && lastLine == '```') {\n" +
    "    return multiLineCode;\n" +
    "  }\n" +
    "}\n" +
    "~~~\n\n" +
    "You can also make text **bold**... whoa!\n" +
    "Or _italic_.\n" +
    "Or... wait for it... **_both!_** \n" +
    "And feel free to go crazy ~~crossing stuff out~~.\n\n" +
    "There's also [links](https://www.freecodecamp.org), and\n\n" +
    "> Block Quotes!\n\n" +
    "And if you want to get really crazy, even tables:\n\n" +
    "| Wild Header      | Crazy Header    | Another Header?    |\n" +
    "| ---------------- | --------------- | ------------------ |\n" +
    "| Your content can | be here, and it | can be here....    |\n" +
    "| And here.        | Okay.           | I think we get it. |\n\n" +
    "- And of course there are lists.\n" +
    "  - Some are bulleted.\n" +
    "    - With different indentation levels.\n" +
    "      - That look like this.\n\n" +
    "1. And there are numbered lists too.\n" +
    "1. Use just 1s if you want!\n" +
    "1. And last but not least, let's not forget embedded images:\n\n" +
    "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";

  const [input, setInput] = useState(defaultMarkdown);
  const markdown = marked.parse(input);
  const [maximizeEditor, setMaximizeEditor] = useState(false);
  const [maximizePreview, setMaximizePreview] = useState(false);
  const [sideBySide, setSideBySide] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClickEditor = () => {
    setMaximizeEditor(!maximizeEditor);
  };

  const handleClickPreview = () => {
    setMaximizePreview(!maximizePreview);
  };

  const handleClickLayout = () => {
    setSideBySide(!sideBySide);
  };

  return (
    <div
      className={cn("flex flex-col items-center gap-5 sm:py-4 relative", {
        "gap-2 flex-row items-start sm:pt-10 md:gap-3":
          sideBySide && !maximizeEditor && !maximizePreview,
      })}
    >
      <LayoutToggle
        maximizeEditor={maximizeEditor}
        maximizePreview={maximizePreview}
        sideBySide={sideBySide}
        handleClick={handleClickLayout}
      />
      <Editor
        maximizeEditor={maximizeEditor}
        maximizePreview={maximizePreview}
        sideBySide={sideBySide}
        handleChange={handleChange}
        handleClick={handleClickEditor}
        input={input}
      />
      <Preview
        maximizeEditor={maximizeEditor}
        maximizePreview={maximizePreview}
        sideBySide={sideBySide}
        markdown={markdown}
        handleClick={handleClickPreview}
      />
    </div>
  );
}

export default App;
