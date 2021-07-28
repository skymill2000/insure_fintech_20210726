let car = {
  name: "sonata",
  ph: 500,
  start: function () {
    console.log("engine start");
  },
  stop: function () {
    console.log("engine stop");
  },
};

console.log(car.name);
console.log(car.ph);
car.start();

// json
// {
//     name : "",
//     age : 12,
// }
// ----xml----
// <name>test</name>
// <age>test</age>
