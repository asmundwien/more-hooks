import { ReactNode } from "react";
import { useState } from "react";
import { createDefinedContext, useOnMount } from "@asmundwien/more-hooks";
import { Alert, Button, Col, Row } from "react-bootstrap";

export type User = {
  name: string;
};

const getUser = async (): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return { name: "The Queen" };
};

const Loading = () => <p>loading context data...</p>;

type Props = {
  children: ReactNode;
};

export const [useUserContext, UserProvider] = createDefinedContext<User>();

const UserContext = ({ children }: Props) => {
  const [user, setUser] = useState<User>();
  useOnMount(() => getUser().then(setUser));

  if (!user) {
    return <Loading />;
  }

  return <UserProvider value={user}>{children}</UserProvider>;
};

const UserDetails = () => {
  const { name } = useUserContext();
  return <p>User name: {name}</p>;
};

const App = () => (
  <UserContext>
    <UserDetails />
  </UserContext>
);

const Wrapper = () => {
  const [mounted, setMounted] = useState(false);
  return (
    <>
      {mounted && (
        <Alert variant="info">
          Component has been mounted. Watch to see what happens when the
          lifecycle starts.
        </Alert>
      )}
      {!mounted && (
        <Alert variant="danger">
          Component is unmounted. Click below to mount anew.
        </Alert>
      )}
      {mounted && <App />}

      <Row xs={"auto"}>
        <Col>
          <Button onClick={() => setMounted(!mounted)}>
            {mounted ? "Unmount" : "Mount"} component
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Wrapper;
