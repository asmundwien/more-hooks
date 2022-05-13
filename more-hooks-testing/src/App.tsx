import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {
  CreateDefinedContext,
  UseAsync,
  UseOnMount,
  Navbar,
  ProjectDescription,
} from "components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="mt-3 mb-5">
        <ProjectDescription />
        <hr className="my-5" />
        <UseAsync />
        <hr className="my-5" />
        <UseOnMount />
        <hr className="my-5" />
        <CreateDefinedContext />
      </Container>
    </div>
  );
}

export default App;
