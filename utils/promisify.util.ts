const promisify = async <T>(
  promise: Promise<T>
): Promise<[T | null, unknown]> => {
  return new Promise((resolve) => {
    promise
      .then((data) => resolve([data, null]))
      .catch((error) => resolve([null, error]));
  });
};

export default promisify;
