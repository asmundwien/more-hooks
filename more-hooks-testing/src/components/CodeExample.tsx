import { ReactNode } from "react";
import { Card, Container } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type Props = {
  codeString: string;
  children?: ReactNode;
};

const CodeExample = ({ codeString, children }: Props) => {
  return (
    <Card className="mb-4">
      <SyntaxHighlighter className="mt-0 border-bottom" language="tsx">
        {codeString}
      </SyntaxHighlighter>
      {children && <Container className="p-3">{children}</Container>}
    </Card>
  );
};

export default CodeExample;
