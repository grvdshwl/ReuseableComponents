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

export const colorObject: { [key: number]: string } = {
  0:"#f06595",
  1:"#22b8cf",
  2:"#fcc419",
  3:"#20c997",
  4:"#cc5de8",
}

export const infiniteScrollAnimationObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
entry.target.classList.toggle("slide-animation",entry.isIntersecting)
  })
},{threshold:0.75})


