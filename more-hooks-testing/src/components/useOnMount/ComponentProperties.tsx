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
            <td>1</td>
            <td>
              <code>Function</code>
            </td>
            <td>Method that will be called when the component mounts.</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ComponentProperties;
