import { renderHook } from "@testing-library/react-hooks";
import { useOnMount } from "..";

describe("useOnMount", () => {
  it("input method has been called a single time", () => {
    const method = jest.fn();
    renderHook(() => useOnMount(method));
    expect(method).toHaveBeenCalledTimes(1);
  });
});
