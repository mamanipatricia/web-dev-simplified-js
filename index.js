console.log("hello world");

/* DESTRUCTING */
console.log("~~~~~DESTRUCTURING~~~~~");

const array = ["A", "B", "C", "D", "E", ["F", "G"]];

// 1st way
/*
const first = array[0];
const second = array[1];

console.log('first, second', first, second);
*/

// 2nd way destructuring
// Array destructuring
const [first, second, , f, five, [sixth, seventh]] = array;
console.log(
  "first:",
  first,
  "second: ",
  second,
  "four:",
  f,
  "five:",
  five,
  "sixth:",
  sixth,
  "seventh:",
  seventh
);

function addAndMultiply(a, b) {
  return [a + b, a * b];
}

const [sum, product] = addAndMultiply(2, 3);
console.log("sum:", sum, "product:", product);

// object destructuring
const person = {
  name: "Patricia",
  age: 29,
  favoriteFood: "Rice",
  address: {
    street: "123 Main Street",
    city: "Somewhere",
    zipCode: "5555",
  },
  pet: "Lucas",
};

// 1st way
/*
const firstName = person.name;
const age = person.age;
console.log('firstName:', firstName, "age:", age);
*/

// 2nd way destructuring
const {
  name: firstName,
  age,
  address: { street, city, zipCode = "1234" },
} = person; // renaming name key to firstName,
console.log("firstName:", firstName, "age:", age);
console.log("address:", street, "City:", city, "zipCode:", zipCode);

// another
function addAndMultiply1(a, b) {
  return { sum: a + b, product: a * b };
}

const { sum1, product1 } = addAndMultiply1(2, 3);
console.log("sum1:", sum1, "product1", product1);

function nameToFirstAndLastName(fullName) {
  console.log(fullName.split(" "));
  const [firstName2, lastName2] = fullName.split(" ");
  return {
    firstName2: firstName2,
    lastName2: lastName2,
  };
}

const { firstName2, lastName2 } = nameToFirstAndLastName("Patricia Mamani");

//
function addAndMultiply2({ a: a1, b: b1 = 10 }) {
  // const a = options.a;
  // const { a, b } = options;
  return [a1 + b1, a1 * b1];
}

const [sum2, product2] = addAndMultiply2({ a: 2 });
console.log("sum2:", sum2, "product:", product2);


