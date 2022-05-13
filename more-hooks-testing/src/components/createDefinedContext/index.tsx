import CodeExample from "components/CodeExample";
import ComponentDescription from "./ComponentDescription";
import { one, two, three } from "./codeExample";
import WorkingExample from "./WorkingExample";

const UseOnMount = () => {
  return (
    <>
      <ComponentDescription />
      <h3>Example</h3>
      <CodeExample codeString={one}>
        <ol>
          <li>Create a new defined context.</li>
          <li>
            Get your data from somewhere, then feed it to your provider. In this
            example it calls for an async user object.
          </li>
        </ol>
      </CodeExample>
      <CodeExample codeString={two}>
        <p>
          Any children of your context will have access to the data in the
          context provider.
        </p>
      </CodeExample>
      <CodeExample codeString={three}>
        <p>Finally, access the hook from your DefinedContext.</p>
        <hr />
        <WorkingExample />
      </CodeExample>
    </>
  );
};

export default UseOnMount;
