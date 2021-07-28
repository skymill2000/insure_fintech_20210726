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

let cars = ["bmw", "saab", "ford"];

// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);

for (let index = 0; index < cars.length; index++) {
  const car = cars[index];
  //   console.log(car);
}

for (car of cars) {
  console.log(car);
}

cars.map((car) => {
  console.log(car);
});

//String [] names = new Array[3]
//Arraylist 개념이랑 비슷
