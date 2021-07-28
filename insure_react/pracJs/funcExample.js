function plus(p1, p2) {
  return p1 + p2;
}

const plus2 = (p1, p2) => {
  return p1 + p2;
};

const minus = (p1, p2) => {
  return p1 - p2;
};

const multi = (p1, p2) => {
  return p1 * p2;
};

const div = (p1, p2) => {
  return p1 / p2;
};

// - * / 3가지의 연산을 Arrow function 선언해주세요

console.log(plus(1, 2));
console.log(plus2(1, 2));
console.log(multi(1, 2));
console.log(minus(1, 2));
console.log(div(1, 2));
