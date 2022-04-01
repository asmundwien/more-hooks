import { useState } from "react";
import { useOnMount } from "@asmundwien/more-hooks";
import { Alert, Button, Col, Row } from "react-bootstrap";

const fetchText = async (): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return "Roses are red, react hooks are true <3";
};

const WorkingExample = () => {
  const [text, setText] = useState("");

  const fetch = async () => {
    const response = await fetchText();
    setText(response);
  };

  useOnMount(fetch);

  return (
    <>
      {text && <p>Response text: {text}</p>}
      {!text && <Alert variant="light">Just mounted anew, hang on...</Alert>}
    </>
  );
};

const Wrapper = () => {
  const [mounted, setMounted] = useState(false);
  return (
    <>
      {mounted && <Alert variant="info">Mounted</Alert>}
      {!mounted && <Alert variant="danger">Not mounted</Alert>}
      {mounted && <WorkingExample />}

      <Row xs={"auto"}>
        <Col>
          <Button onClick={() => setMounted(!mounted)}>Toggle mount</Button>
        </Col>
      </Row>
    </>
  );
};

export default Wrapper;
