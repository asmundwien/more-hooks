import CodeExample from "components/CodeExample";
import ComponentDescription from "./ComponentDescription";
import { codeExample } from "./codeExample";
import WorkingExample from "./WorkingExample";
import ComponentProperties from "./ComponentProperties";

const UseOnMount = () => {
  return (
    <>
      <ComponentDescription />
      <h3>Example</h3>
      <CodeExample codeString={codeExample}>
        <WorkingExample />
      </CodeExample>
      <ComponentProperties />
    </>
  );
};

export default UseOnMount;
