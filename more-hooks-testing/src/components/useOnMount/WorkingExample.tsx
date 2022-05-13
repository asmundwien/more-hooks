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
      {!text && <Alert variant="light">Fetching data, hang on...</Alert>}
    </>
  );
};

const Wrapper = () => {
  const [mounted, setMounted] = useState(false);
  return (
    <>
      {mounted && (
        <Alert variant="info">
          Component has been mounted. Watch to see what happens when the
          lifecycle starts.
        </Alert>
      )}
      {!mounted && (
        <Alert variant="danger">
          Component is unmounted. Click below to mount anew.
        </Alert>
      )}
      {mounted && <WorkingExample />}

      <Row xs={"auto"}>
        <Col>
          <Button onClick={() => setMounted(!mounted)}>
            {mounted ? "Unmount" : "Mount"} component
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Wrapper;
