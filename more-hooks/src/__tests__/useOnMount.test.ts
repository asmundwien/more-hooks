import { renderHook } from "@testing-library/react-hooks";
import { useOnMount } from "..";

describe("useOnMount", () => {
  it("input method has been called", () => {
    const method = jest.fn();
    renderHook(() => useOnMount(method));
    expect(method).toHaveBeenCalledTimes(1);
  });

  it("calls all methods in rest parameter", () => {
    const method1 = jest.fn();
    const method2 = jest.fn();
    const method3 = jest.fn();
    renderHook(() => useOnMount(method1, method2, () => method3()));
    expect(method1).toHaveBeenCalledTimes(1);
    expect(method2).toHaveBeenCalledTimes(1);
    expect(method3).toHaveBeenCalledTimes(1);
  });
});
