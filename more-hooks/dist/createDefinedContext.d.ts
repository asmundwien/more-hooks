import React from "react";
/**
 * A React Context Provider that can only be used when there are values present. Your data can't be undefined. In other words, no validation required.
 *
 * @return   {[hook, React.Context]}
 */
declare const createDefinedContext: <A extends unknown>() => readonly [() => A, React.Provider<A | undefined>];
export default createDefinedContext;
