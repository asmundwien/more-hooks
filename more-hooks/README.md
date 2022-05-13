# more-hooks

A collection of usefull hooks that are commonly used in React development.

We take no credits for these components as they are merely a collection of ideas shared accross the community. Thanks for being great!

This library is written with full **TypeScript** support.

## Table of content

- [ useAsync ](#useAsync)
- [ useOnMount ](#useOnMount)
- [ createDefinedContext ](#createDefinedContext)

## useAsync

<a name="useAsync"></a>

This hook is designed to simplify the handling of a asynchronous calls.

### Example

```js
import { useAsync } from "@asmundwien/more-hooks";

const App = () => {
  const { pending, error, response, call } = useAsync(someAsyncFunc);
  return (
    <>
      {pending && <LoadingSpinner />}
      {error && <MyError error={error} />}
      {response && <MyData data={response} />}
      <Button onClick={() => call()}>Fetch something</Button>
    </>
  );
};
```

### Input arguments

| #   | required | type              | description                                                 |
| --- | -------- | ----------------- | ----------------------------------------------------------- |
| 1   | true     | `async Function`  | The method that this hook will call                         |
| 2   | false    | `UseAsyncOptions` | Options object. See documentation on UseAsyncOptions below. |

### Types

#### `UseAsyncResponse`

| name          | type             | description                                                                                                                                       |
| ------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| pending       | `boolean`        | Whether or not the asynchronous call is currently pending.                                                                                        |
| response      | `T`              | The response from the asynchronous call. `T` is the same response type as the asynchronos method the hook was initialized with.                   |
| call          | `async Function` | Will initialize a call to the method that the hook was initialized with. Will expect the same input parameters as the original method definition. |
| error         | `unknown`        | Whatever exception the asynchronous call may have thrown.                                                                                         |
| success       | `boolean`        | Whether or not the asynchronous call was completed without catching any errors.                                                                   |
| hasBeenCalled | `boolean`        | Defaults to `false`. Will remain `true` once the asynchronous call has been made at at least once.                                                |

#### `UseAsyncOptions`

Object containing optional pramaters.
| name | type | description |
| ------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| immediate | `tuple` | A list with the same parameters as the call-method. Will initialize a call when the component mounts. |

## useOnMount

<a name="useOnMount"></a>

This tiny hook will run only during your components first render lifecycle. Remeber `componentDidMount()`?.

### Example

```js
import { useOnMount } from "@asmundwien/more-hooks";

const Component = () => {
  const [text, setText] = useState("");

  const fetch = async () => {
    const response = await myApi();
    setText(response);
  };

  useOnMount(fetch);

  return (
    <>
      {text && <p>Response text: {text}</p>}
      {!text && <Alert>Just mounted anew, hang on...</Alert>}
    </>
  );
};
```

### Input arguments

| #    | type       | description                                                                                                                                                                                                               |
| ---- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| rest | `Function` | Methods that will be called when the component mounts. Because it is a [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) any number of methods can be passed. |

## createDefinedContext

<a name="createDefinedContext"></a>

An implementation on top of React Context. It ensures the existance of your ContextProvider and its value. The content of your context can therefore never be undefined.

### Example

```js
import { createDefinedContext, useOnMount } from "@asmundwien/more-hooks";

export const [useUserContext, UserProvider] = createDefinedContext<User>();

const UserContext = ({ children }: Props) => {
  const [user, setUser] = useState<User>();
  useOnMount(() => getUser().then(setUser));

  if (!user) {
    return <Loading />;
  }

  return <UserProvider value={user}>{children}</UserProvider>;
};
```

1. Create a new defined context.
1. Get your data from somewhere, then feed it to your provider. In this example it calls for an async user object.

```js
import { UserContext, UserDetails } from ".";

const App = () => (
  <UserContext>
    <UserDetails />
  </UserContext>
);
```

Any children of your context will have access to the data in the context provider.

```js
import { useUserContext } from "UserContext";

const UserDetails = () => {
  const { name } = useUserContext();
  return <p>User name: {name}</p>;
};
```

Finally, access the hook from your DefinedContext.

### Input

In a TypeScript-project, a Type-definition is required.

### Return

Returns a tuple containing a hook to access your data, and the React Context Provider needed to initialize the context.
