type Callback = (...args: any[]) => void;

export const debounce = (callback: Callback, delay: number): Callback => {
  let timer:ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};


export const  throttle=(callback: Callback, delay: number = 1000) =>{
  let shouldWait = false;
  let waitingArgs: any[] | null = null;

  const timeoutFunc = () => {
    if (!waitingArgs ) {
      shouldWait = false;
    } else {
      callback(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args: any[]) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    callback(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
}