import { useEffect } from "react";

/**
 * A tiny hook that runs only during your components first render lifecycle. Remeber onComponentDidMount?.
 *
 * @param    {Function} methods
 *           this rest parameter can take any amount of input methods
 *
 * @return   {void}
 *
 * @example
 * const Component = () => {
 *   const [text, setText] = useState("");
 *
 *   const fetch = async () => {
 *     const response = await myApi();
 *     setText(response);
 *   };
 *
 *   useOnMount(fetch);
 *
 *   return (
 *     <>
 *       {text && <p>Response text: {text}</p>}
 *       {!text && <Alert>Just mounted anew, hang on...</Alert>}
 *     </>
 *   );
 * };
 */

const useOnMount = (...methods: (() => unknown)[]) =>
  useEffect(() => {
    for (const f of methods) f();
  }, []);

export default useOnMount;
