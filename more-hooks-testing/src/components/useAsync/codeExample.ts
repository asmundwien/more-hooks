export const codeExample =
  'import { useAsync } from "@asmundwien/more-hooks";\n' +
  "\n" +
  "const Component = () => {\n" +
  "  const { response, pending, success, error, call } = useAsync(fetchResource);\n" +
  "  return (\n" +
  "    <>\n" +
  "      {pending && <LoadingSpinner />}\n" +
  "      {error && <MyError error={error} />}\n" +
  "      {success && <SuccessMessage />}\n" +
  "      {!pending && response && <MyData data={response} />}\n" +
  "      <Button onClick={() => call()}>Fetch something</Button>\n" +
  "    </>\n" +
  "  );\n" +
  "};";
