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
export declare type UseAsyncResponse<R, A extends unknown[]> = {
    response: R | undefined;
    pending: boolean;
    success: boolean;
    error: unknown | null;
    hasBeenCalled: boolean;
    call: UseAsyncMethod<R, A>;
};
export declare type UseAsyncMethod<R, A extends unknown[]> = {
    (...args: A): Promise<R>;
};
export declare type UseAsyncOptions<A extends unknown[]> = {
    immediate: A;
};
declare const useAsync: <R, A extends unknown[]>(method: UseAsyncMethod<R, A>, options?: UseAsyncOptions<A> | undefined) => UseAsyncResponse<R, A>;
export default useAsync;
