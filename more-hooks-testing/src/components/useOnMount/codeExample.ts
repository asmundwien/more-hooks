export const codeExample =
  'import { useOnMount } from "@asmundwien/more-hooks";\n' +
  "\n" +
  "const Component = () => {\n" +
  '  const [text, setText] = useState("");\n' +
  "\n" +
  "  const fetch = async () => {\n" +
  "    const response = await myApi();\n" +
  "    setText(response);\n" +
  "  };\n" +
  "\n" +
  "  useOnMount(fetch);\n" +
  "\n" +
  "  return (\n" +
  "    <>\n" +
  "      {text && <p>Response text: {text}</p>}\n" +
  "      {!text && <Alert>Just mounted anew, hang on...</Alert>}\n" +
  "    </>\n" +
  "  );\n" +
  "};";
