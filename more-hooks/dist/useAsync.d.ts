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
declare const useAsync: <R, A extends unknown[] = []>(method: (...args: A) => Promise<R>) => UseAsyncResponse<R, A>;
export default useAsync;
