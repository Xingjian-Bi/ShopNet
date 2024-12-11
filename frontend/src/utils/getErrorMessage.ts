import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

const getErrorMessage = (
  error: FetchBaseQueryError | SerializedError | undefined
): string => {
  if (!error) return "";

  if ("status" in error) {
    const fetchError = error as FetchBaseQueryError;
    return fetchError.data
      ? (fetchError.data as any).message || "An error occurred"
      : "An error occurred";
  } else {
    const serializedError = error as SerializedError;
    return serializedError.message || "An error occurred";
  }
};

export default getErrorMessage;
