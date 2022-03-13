import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Navbar, ProjectDescription, UseAsync } from "components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="mt-3 mb-5">
        <ProjectDescription />
        <UseAsync />
      </Container>
    </div>
  );
}

export default App;
