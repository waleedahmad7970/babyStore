import { AxiosResponse } from "axios";

export async function promisify<T>(
  promise: Promise<AxiosResponse<T>>,
): Promise<[AxiosResponse<T> | null, any]> {
  try {
    const response = await promise;
    return [response, null];
  } catch (error) {
    return [null, error];
  }
}
