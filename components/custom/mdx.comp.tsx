/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const MDXComponents = {
  // Heading 1
  h1: (props: any) => (
    <h1
      className="text-3xl font-bold my-4 text-gray-900 dark:text-white"
      {...props}
    />
  ),
  // Heading 2
  h2: (props: any) => (
    <h2
      className="text-2xl font-semibold my-3 text-gray-900 dark:text-white"
      {...props}
    />
  ),
  // Paragraph
  p: (props: any) => (
    <p className="text-lg my-2 text-gray-900 dark:text-white" {...props} />
  ),
  // Code Block
  code: ({ children, className }: any) => {
    const language = className?.replace("language-", "");
    return (
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        className="rounded-lg bg-gray-900 p-4 mt-2"
      >
        {children}
      </SyntaxHighlighter>
    );
  },
  // Inline code
  inlineCode: ({ children }: any) => (
    <code className="bg-gray-800 text-white p-1 rounded-sm">{children}</code>
  ),
  // Link
  a: (props: any) => (
    <a
      className="text-blue-600 hover:text-blue-400"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  // List
  ul: (props: any) => <ul className="list-disc pl-5 my-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-5 my-2" {...props} />,
  // List Item
  li: (props: any) => (
    <li className="text-lg text-gray-900 dark:text-white" {...props} />
  ),
};
