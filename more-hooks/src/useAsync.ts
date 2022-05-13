import { useCallback, useState } from "react";
import useOnMount from "./useOnMount";

/**
 * A hook designed to simplify the handling of a asynchronous calls.
 *
 * @param    {() => Promise<T>} method
 *           the asynchronous method that this hook will call
 
 * @param    {UseAsyncOptions | undefined} options
 *
 * @return   {Object}
 *           response data, status information and callback method
 *
 * @example
 * const Component = () => {
 *   const { response, pending, success, error, call } = useAsync(fetchResource);
 *   return (
 *     <>
 *       {pending && <LoadingSpinner />}
 *       {error && <MyError error={error} />}
 *       {success && <SuccessMessage />}
 *       {!pending && response && <MyData data={response} />}
 *       <Button onClick={() => call()}>Fetch resource</Button>
 *     </>
 *   );
 * };
 */

export type UseAsyncResponse<R, A extends unknown[]> = {
  response: R | undefined;
  pending: boolean;
  success: boolean;
  error: unknown | null;
  hasBeenCalled: boolean;
  call: UseAsyncMethod<R, A>;
};

export type UseAsyncMethod<R, A extends unknown[]> = {
  (...args: A): Promise<R>;
};

export type UseAsyncOptions<A extends unknown[]> = { immediate: A };

const useAsync = <R, A extends unknown[]>(
  method: UseAsyncMethod<R, A>,
  options?: UseAsyncOptions<A>
): UseAsyncResponse<R, A> => {
  const [response, setResponse] = useState<R>();
  const [pending, setPending] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);
  const [hasBeenCalled, setHasBeenCalled] = useState<boolean>(false);

  const call = useCallback(async (...args: Parameters<typeof method>) => {
    setHasBeenCalled(true);
    setPending(true);
    setError(null);

    try {
      const response = await method(...args);
      setResponse(response);
      setSuccess(true);
      return response;
    } catch (error) {
      setError(error);
      setSuccess(false);
      throw error;
    } finally {
      setPending(false);
    }
  }, []);

  useOnMount(() => {
    if (options?.immediate) {
      call(...options?.immediate);
    }
  });

  return { response, pending, success, error, call, hasBeenCalled };
};

export default useAsync;
