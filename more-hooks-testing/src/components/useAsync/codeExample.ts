export const codeExample =
  "const Component = () => {\n" +
  "  const { data, pending, success, error, call } = useAsync(fetchResource);\n" +
  "  return (\n" +
  "    <>\n" +
  "      {pending && <LoadingSpinner />}\n" +
  "      {error && <MyError error={error} />}\n" +
  "      {success && <SuccessMessage />}\n" +
  "      {!pending && data && <MyData data={data} />}\n" +
  "      <Button onClick={() => call()}>Fetch resource</Button>\n" +
  "    </>\n" +
  "  );\n" +
  "};";
