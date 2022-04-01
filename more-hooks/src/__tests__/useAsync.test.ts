import { renderHook, act } from "@testing-library/react-hooks";
import useAsync from "../useAsync";

describe("useAsync", () => {
  it("is defined", () => {
    expect(useAsync).toBeDefined();
  });

  it("initiates with expected values", () => {
    expect.assertions(9);
    const { result } = renderHook(() => useAsync(async () => {}));

    expect(result.current.response).toBeUndefined();
    expect(result.current.error).toBeNull();

    expect(result.current.pending).toBe(false);
    expect(typeof result.current.pending).toBe("boolean");
    expect(result.current.success).toBe(false);
    expect(typeof result.current.success).toBe("boolean");

    expect(result.current.hasBeenCalled).toBe(false);
    expect(typeof result.current.hasBeenCalled).toBe("boolean");

    expect(typeof result.current.call).toBe("function");
  });

  it("has been called successfully, states were set accordingly", async () => {
    expect.assertions(6);
    const expectedData = { testData: {} };
    const method = jest.fn().mockReturnValue(expectedData);
    const { result } = renderHook(() => useAsync(method));

    await act(async () => {
      await result.current.call();
    });

    expect(result.current.response).toStrictEqual(expectedData);
    expect(result.current.error).toBeNull();

    expect(result.current.pending).toBe(false);
    expect(result.current.success).toBe(true);
    expect(result.current.hasBeenCalled).toBe(true);

    expect(method).toHaveBeenCalledTimes(1);
  });

  it("threw error when called, states were set accordingly", async () => {
    expect.assertions(6);
    const expectedError = "whoops";
    const method = jest.fn().mockRejectedValue(expectedError);
    const { result } = renderHook(() => useAsync(method));

    await act(async () => {
      await result.current.call();
    });

    expect(result.current.response).toBeUndefined();
    expect(result.current.error).toBe(expectedError);

    expect(result.current.pending).toBe(false);
    expect(result.current.success).toBe(false);
    expect(result.current.hasBeenCalled).toBe(true);

    expect(method).toHaveBeenCalledTimes(1);
  });

  it("updates response after second call", async () => {
    expect.assertions(3);
    const firstExpectedData = { testData: "first" };
    const secondExpectedData = { testData: "second" };

    const method = jest.fn();
    const { result } = renderHook(() => useAsync(method));

    method.mockReturnValue(firstExpectedData);
    await act(async () => {
      await result.current.call();
    });

    expect(result.current.response).toStrictEqual(firstExpectedData);

    method.mockReturnValue(secondExpectedData);
    await act(async () => {
      await result.current.call();
    });

    expect(result.current.response).toStrictEqual(secondExpectedData);
    expect(method).toHaveBeenCalledTimes(2);
  });
});
