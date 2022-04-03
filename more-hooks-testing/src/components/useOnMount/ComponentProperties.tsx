import { Table } from "react-bootstrap";

const ComponentProperties = () => {
  return (
    <>
      <h3>Input arguments</h3>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>type</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>rest</td>
            <td>
              <code>Function</code>
            </td>
            <td>
              Methods that will be called when the component mounts. Because it
              is a{" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">
                rest parameter
              </a>{" "}
              any number of methods can be passed.
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ComponentProperties;
