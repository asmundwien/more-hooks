import { useCallback, useState } from "react";

/**
 * A hook designed to simplify the handling of a asynchronous calls.
 *
 * @param    {() => Promise<T>} method
 *           the asynchronous method that this hook will call
 *
 * @return   {Object}
 *           response data, status information and callback method
 *
 * @example
 * const Component = () => {
 *   const { data, pending, success, error, call } = useAsync(fetchResource);
 *   return (
 *     <>
 *       {pending && <LoadingSpinner />}
 *       {error && <MyError error={error} />}
 *       {success && <SuccessMessage />}
 *       {!pending && data && <MyData data={data} />}
 *       <Button onClick={() => call()}>Fetch resource</Button>
 *     </>
 *   );
 * };
 */

interface UseAsyncResponse<R, P extends unknown[]> {
  data: R | undefined;
  pending: boolean;
  success: boolean;
  error: unknown | null;
  hasBeenCalled: boolean;
  call: (...args: P) => Promise<R | undefined>;
}

const useAsync = <R, A extends unknown[] = []>(
  method: (...args: A) => Promise<R>
): UseAsyncResponse<R, A> => {
  const [data, setData] = useState<R>();
  const [pending, setPending] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);
  const [hasBeenCalled, setHasBeenCalled] = useState<boolean>(false);

  const call = useCallback(async (...args: Parameters<typeof method>) => {
    setHasBeenCalled(true);
    setPending(true);
    setSuccess(false);
    setData(undefined);
    setError(null);

    try {
      const response = await method(...args);
      setData(response);
      setSuccess(true);
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
      return data;
    }
  }, []);

  return { data, pending, success, error, call, hasBeenCalled };
};

export default useAsync;
