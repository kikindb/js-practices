const start = () => {
  console.log("Start");
};

const throttle = (fn, delay) => {
  let flag = true;

  return function () {
    let context = this, args = arguments;

    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  }
};

const throttleStart = throttle(start, 800);

