# more-hooks

A collection of usefull hooks that are commonly used in React development.

We take no credits for these components as they are merely a collection of ideas shared accross the community. Thanks for being great!

This library is written with full **TypeScript** support.

## useAsync

This hook is designed to simplify the handling of a asynchronous calls.

### Example

```js
const App = () => {
  const { pending, error, data, call } = useAsync(someAsyncFunc);
  return (
    <>
      {pending && <LoadingSpinner />}
      {error && <MyError error={error} />}
      {data && <MyData data={data} />}
      <Button onClick={() => call()}>Get data</Button>
    </>
  );
};
```

### Input arguments

| #   | type             | description                         |
| --- | ---------------- | ----------------------------------- |
| 1   | `async Function` | The method that this hook will call |

### Response properties

| name          | type             | description                                                                                                                                       |
| ------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| pending       | `boolean`        | Whether or not the asynchronous call is currently pending.                                                                                        |
| data          | `T`              | The response data from the asynchronous call. `T` is the same response type as the asynchronos method the hook was initialized with.              |
| call          | `async Function` | Will initialize a call to the method that the hook was initialized with. Will expect the same input parameters as the original method definition. |
| error         | `unknown`        | Whatever exception the asynchronous call may have thrown.                                                                                         |
| success       | `boolean`        | Whether or not the asynchronous call was completed without catching any errors.                                                                   |
| hasBeenCalled | `boolean`        | Defaults to `false`. Will remain `true` once the asynchronous call has been made at at least once.                                                |
