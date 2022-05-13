import React from "react";

/**
 * A React Context Provider that can only be used when there are values present. Your data can't be undefined. In other words, no validation required.
 *
 * @return   {[hook, React.Context]}
 */

const createDefinedContext = <A extends unknown | null>() => {
  const context = React.createContext<A | undefined>(undefined);

  const useDefinedContext = () => {
    const c = React.useContext(context);
    if (c === undefined) {
      throw new Error(
        "Context value is undefined. useDefined must be inside a ContextProvider with a defined value."
      );
    }
    return c;
  };

  return [useDefinedContext, context.Provider] as const;
};

export default createDefinedContext;
