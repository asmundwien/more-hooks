import { useAsync } from "@asmundwien/more-hooks";
import { Alert, Button, Col, Row, Spinner } from "react-bootstrap";

const fetchText = async (error: boolean = false): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (error) throw Error("error");
  return "Roses are red, react hooks are true <3";
};

const WorkingExample = () => {
  const { response, pending, success, hasBeenCalled, error, call } =
    useAsync(fetchText);
  return (
    <>
      {!hasBeenCalled && (
        <Alert variant="light">
          Click one of the buttons below to initiate a call
        </Alert>
      )}
      {pending && <Alert variant="light">Awaiting response...</Alert>}
      {error && <Alert variant="danger">Whoops, a wild error appeared</Alert>}
      {success && <Alert variant="success">Success!</Alert>}
      <Row
        style={{ minHeight: 75 }}
        className="align-items-center justify-content-center mb-2"
      >
        {pending && <Spinner animation="border" variant="primary" />}
        {!pending && success && <p>Response text: {response}</p>}
      </Row>

      <Row xs={"auto"}>
        <Col>
          <Button onClick={() => call()}>Click to fetch text</Button>
        </Col>
        <Col>
          <Button variant="danger" onClick={() => call(true)}>
            Click for error
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default WorkingExample;
