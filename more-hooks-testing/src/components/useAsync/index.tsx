import CodeExample from "components/CodeExample";
import ComponentDescription from "./ComponentDescription";
import { codeExample } from "./codeExample";
import WorkingExample from "./WorkingExample";
import ComponentProperties from "./ComponentProperties";

const UseAsync = () => {
  return (
    <>
      <ComponentDescription />
      <h3>Example</h3>
      <CodeExample codeString={codeExample}>
        <WorkingExample />
      </CodeExample>
      <h3>Properties</h3>
      <ComponentProperties />
    </>
  );
};

export default UseAsync;
