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

// SPREAD AND REST OPERATOR
const arr = ["A", "B", "C", "D", "E", "F"];

const person1 = {
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

function sum3(...numbers) {
  // spread operator
  console.log("numbers:", numbers);
  return numbers.reduce((sum, number) => sum + number, 0);
  //   return a + b;
}

sum3(10, 2, 3, 4); // multiplier = 10, arr = 2, 3, 4
// console.log(sum3([2, 3, 4]));

// copying an array
const numberArr = [1, 2, 3];
// const newArr = numberArr; // both has the same reference, and if we change any value to numberArr therefore will be changed to newArr as well
const newArr = [...numberArr]; // we are creating a clone which is a completely, separated, independent that dont affect to the other
newArr.push(22);
console.log("newArr:", newArr);
console.log("numberArr:", numberArr);

// using the index.html
/*
const divs = [...document.querySelectorAll("div")]; // nodeList, spread operator
divs.map(div => {
    console.log(div);
})

console.log("divs:", divs);
*/
const [a, b, ...rest] = numberArr;
console.log(a, b, rest);

// SPREAD OPERATOR IN OBJS
console.log("~~~~~SPREAD OPERATOR IN OBJS~~~~~~");
// another obj details
const details = {
  name: "Alicia",
  age: 25,
};
/* cloning person1 obj
    adding individual properties friend: "Sally",
    both person2 and details objs have name and age, takes the last obj defined in the obj {}
    below details obj is the last obj defined in the destructuring, so Alicia will be kept as name
*/
const person2 = { ...person1, friend: "Sally", ...details };
// destructuring person2
const { name: n, age: ag, ...rest1 } = person2; // spread operator
// overriding name to Lucas to person1 obj
person1.name = "Lucas";
console.log("name:", n, "age:", ag, "rest:", rest1);

console.log("person1", person1);
console.log("person2", person2);

// TODO: understand this incredibly important




