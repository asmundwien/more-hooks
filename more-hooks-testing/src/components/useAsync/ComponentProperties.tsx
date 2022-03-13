import { Table } from "react-bootstrap";

const ComponentProperties = () => {
  return (
    <>
      <h4>Input arguments</h4>
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
              <code>async Function</code>
            </td>
            <td>The method that this hook will call.</td>
          </tr>
        </tbody>
      </Table>
      <h4>Response properties</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>name</th>
            <th>type</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>pending</td>
            <td>
              <code>boolean</code>
            </td>
            <td>Whether or not the asynchronous call is currently pending.</td>
          </tr>
          <tr>
            <td>data</td>
            <td>
              <code>T</code>
            </td>
            <td>
              The response data from the asynchronous call. <code>T</code> is
              the same response type as the asynchronos method the hook was
              initialized with.
            </td>
          </tr>
          <tr>
            <td>call</td>
            <td>
              <code>async Function</code>
            </td>
            <td>
              Will initialize a call to the method that the hook was initialized
              with. Will expect the same input parameters as the original method
              definition.
            </td>
          </tr>
          <tr>
            <td>error</td>
            <td>
              <code>unknown</code>
            </td>
            <td>What ever exception the asynchronous call may have thrown.</td>
          </tr>
          <tr>
            <td>success</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              Whether or not the asynchronous call was completed without
              catching any errors.
            </td>
          </tr>
          <tr>
            <td>hasBeenCalled</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              Defaults to <code>false</code>. Will remain <code>true</code> once
              the asynchronous call has been made at at least once.
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ComponentProperties;
