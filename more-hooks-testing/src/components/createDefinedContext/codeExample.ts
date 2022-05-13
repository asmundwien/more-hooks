export const one =
  'import { createDefinedContext, useOnMount } from "@asmundwien/more-hooks";\n' +
  "\n" +
  "export const [useUserContext, UserProvider] = createDefinedContext<User>();\n" +
  "\n" +
  "const UserContext = ({ children }: Props) => {\n" +
  "  const [user, setUser] = useState<User>();\n" +
  "  useOnMount(() => getUser().then(setUser));\n" +
  "\n" +
  "  if (!user) {\n" +
  "    return <Loading />;\n" +
  "  }\n" +
  "\n" +
  "  return <UserProvider value={user}>{children}</UserProvider>;\n" +
  "};";

export const two =
  'import { UserContext, UserDetails } from ".";\n' +
  "\n" +
  "const App = () => (\n" +
  "  <UserContext>\n" +
  "    <UserDetails />\n" +
  "  </UserContext>\n" +
  ");";

export const three =
  'import { useUserContext } from "UserContext";\n' +
  "\n" +
  "const UserDetails = () => {\n" +
  "  const { name } = useUserContext();\n" +
  "  return <p>User name: {name}</p>;\n" +
  "};";
