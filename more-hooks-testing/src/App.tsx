import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Navbar, ProjectDescription, UseAsync, UseOnMount } from "components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="mt-3 mb-5">
        <ProjectDescription />
        <hr className="my-4" />
        <UseAsync />
        <hr className="my-4" />
        <UseOnMount />
      </Container>
    </div>
  );
}

export default App;
