console.log("My Bind Function");

const name = {
  firstname: "Jesus",
  lastname: "Dick"
}

let printName = function (hometown, state, country) {
  console.log(`${this.firstname} ${this.lastname}, ${hometown}, ${state}, ${country}`);
};

let printMyName = printName.bind(name);

printMyName("Durango", "Victoria de Dgo", "Mexico");


Function.prototype.mybind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  }
};

let printMyName2 = printName.mybind(name);

printMyName2("Durango", "Victoria de Dgo", "Mexico");
