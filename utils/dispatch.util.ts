let appDispatch: () => void = () => {};

export const getDispatch = (): (() => void) => appDispatch;
export const setDispatch = (dispatch: () => void): void => {
  appDispatch = dispatch;
};
