let counter = 0;

const search = () => {
  console.log("searching... ", counter++);
};

const debounce = function (fn, delay) {
  let timer;

  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
};

const debouncedSearch = debounce(search, 300);