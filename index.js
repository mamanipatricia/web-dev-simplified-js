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

// 2. SPREAD AND REST OPERATOR
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

// 3. ENHANCED OBJECT LITERAL
const propertyName = "name";
const firstName3 = "Antonio";
const index = 1;
const age3 = 25;
const sayHi = function () {
  console.log("HI...");
};

const persona = {
  firstName3, // don't assign the value property when it is equal to the key property
  [propertyName]: firstName3,
  age3: age3,
  [`age${index}`]: age3,
  // 1st way
  sayHi: sayHi,
  // 2nd way
  sayBye: function () {
    console.log("Bye...");
  },
  // 3th way
  sayTakeCare() {
    console.log("TakeCare!");
  },
};

// persona[propertyName] = firstName3;
console.log("persona", persona);

// 5. Default parameters

function greet(
  firstName,
  lastName,
  { salutation = "Hi,", suffix = "Mr." } = {}
) {
  //   salutation = salutation || "Hi";
  console.log(`${salutation} ${suffix} ${firstName} ${lastName}`);
}

// greet("Kyle", "Cook", "HI");
greet("Kyle", "Cook", { suffix: "MR.", salutation: "Hello," }); // works
greet("Kyle", "Cook", {}); // works
greet("Kyle", "Cook"); // doesn't works, cannot destructuring of undefined, instead put an empty brackets to the parameters in the obj

// 6. Null coalescing
// Null coalescing =>  ?? for null/undefined

function greet1(firstName, lastName) {
  //   lastName = lastName || "Smith"; // this default parameter works for all falsy values but I want only for null/undefined
  lastName = lastName ?? "Smith";
  console.log(`${firstName} ${lastName}`);
}

greet1("Kyle", "Cook");
greet1("Kyle", undefined);
greet1("Kyle", null);
greet1("Kyle", 0);
greet1("Kyle", "");
greet1("Kyle"); // it is sent undefined as default value

/* quick explanation of "??"
    variable ?? variable1  <-- this one is returned if it is null or undefined, otherwise the "variable" is used as a default
       ^
    this is checked whether or not is null or undefined
*/
// example:
console.log((undefined || null) ?? (false && (true || false)));
console.log(undefined || null);

// 7. Optional Chaining
// Optional Chaining => ?   checks null or undefined // question mark and period
console.log("~~~~~~~~7. Optional Chaining~~~~~~~~~`");
const patty = {
  name: "Patty",
  age: 29,
  address: {
    street: "123 Main St",
  },
  //   sayHiPatty() {
  //     console.log("Hi Patty");
  //   },
  //   sayHiPatty: "say Hi Patty variable", // (***)   comment this to work properly the optional chaining
  hobbies: ["Bowling", "Weight lifting"],
};

function printStreet(person) {
  // if person is null/undefined it immediately stops executing person = null/undefined then address?.street is not being executed
  console.log(person?.address?.street);
}

function callSayHi(person) {
  // imagine sayHiPatty is a variable, see we have sayHiPatty defined as a string and it passes "?" and then it wants to executes but it returns
  // an error like person?.sayHiPatty is not a function (***) // uncomment above sayHiPatty: "say Hi Patty variable" to work properly
  person?.sayHiPatty?.(); // wth! with this =>   .sayHiPatty?.() // when there is no sayHiPatty it stop executing the function
}
function printHobbyOne() {
  console.log(patty?.hobbies?.[0]);
}

printStreet(patty);
callSayHi(patty);
printHobbyOne(undefined);
printHobbyOne(patty);

// 8. Maps
console.log("~~~~~~~~~~~Maps~~~~~~~~~~~`");
// [[key, value], [key, value]] the key can be anything -> obj, arr
// const map = new Map();
const map = new Map([
  //   ["United States", "USD"],
  [false, "USD"], // the key can also be a boolean value
  [{ a: 1 }, "USD"], // the key is an obj, we can pointing from an object to a specific value, that's not you can do with normal objs
  ["India", "Rupee"],
]);

console.log("map:", map);

const CURRENCY_MAP = {
  "United States": "USD",
  India: "Rupee",
};

const currency = CURRENCY_MAP["India"];

console.log("currency:", currency);

const user = { name: "Lucas" };

const map1 = new Map([[user, { age: 3 }]]);
const pet = { cat: "Lucas" };
const map2 = new Map([[pet, { age: 3 }]]);
console.log("map1:", map1);
console.log("MAP-USER:", map1.get(user));
console.log("MAP-PET:", map2.get(pet));

// map functions => get, set, has(to check if exists), delete, clear (to empty the map
const mapLetters = new Map([
  [1, "A"],
  [2, "B"],
  [3, "C"],
  [4, "D"],
]);
console.log(mapLetters.set(5, "E"));
console.log(mapLetters.get(1));
console.log(mapLetters.get(5));
console.log(mapLetters);
console.log(mapLetters.has(6)); // false
console.log(mapLetters.delete(1));
console.log(mapLetters); // Map(4) { 2 => 'B', 3 => 'C', 4 => 'D', 5 => 'E' }
console.log(mapLetters.clear()); // to completely clear the map
console.log(mapLetters); // Map(0) {}

// set
console.log("~~~~~~~~SET~~~~~~~~");

const set = new Set([1, 2, 3, 4, 4, 4]); // the elements must be unique
set.add(5); // adds to the arr
set.add(4); // do not add to the arr
console.log("set:", set);
// we cannot get an item individually by index like set[0] from a set instead loop through the arr
console.log("set-[1]", set[1]);
set.forEach((value) => {
  console.log("set-value:", value);
});

// to know if there is that value => 2
console.log(set.has(2)); // true
// delete the value
console.log(set.delete(1));
console.log("set:", set);

// size
console.log("size:", set.size);
// clear the set arr
console.log(set.clear()); // Set(0) {}
console.log("set:", set);

// removing dups
function removeDups(arr) {
  return [...new Set(arr)]; // converting to an arr, and returning non duplicated values with Set and spread op
}

const r = removeDups([1, 2, 3, 4, 5, 6, 6, 6, 6]);
console.log("removedDups:", r);

// Symbol
console.log("~~~~~~~~Symbol~~~~~~~~~");
const sym1 = Symbol("Name");
const person4 = {
  age: 25,
  [sym1]: "Patty",
};
console.log("person4", person4);

console.log(Object.entries(person4));
// you cannot see the Symbol in the output - cause this Symbols are hidden they are not accessible except for one specific function = getOwnPropertySymbols()
Object.entries(person4).forEach((key, value) => {
  console.log(key, value);
});
// you cannot see the Symbol in the output too
console.log(JSON.stringify(person4));
// is visible for function = getOwnPropertySymbols()
console.log("getOwnPropertySymbols:", Object.getOwnPropertySymbols(person4)); // [ Symbol(Name) ]

// SYMBOLS ARE SOME INTERNAL IMPLEMENTATIONS DETAILS THAT ARE NOT IMPORTANT FOR USERS

const LOG_LEVEL1 = {
  DEBUG_LEVEL: "debug",
  INFO_LEVEL: "info",
  WARNING_LEVEL: "warning",
  ERROR_LEVEL: "error",
};

// with Symbols
const LOG_LEVEL = {
  // no matter what the Symbol has as value, it will always be unique
  DEBUG: Symbol("debug"),
  INFO: Symbol("info"),
  WARNING: Symbol("warning"),
  ERROR: Symbol("error"),
};

const logLevel = LOG_LEVEL.DEBUG;

if (logLevel == LOG_LEVEL.DEBUG) {
  console.log("logLevel:", logLevel); // Symbol(debug)
}

// 11. Generators and iterators

// 12. Getter and setters
console.log("~~~~~~~Getter and setters~~~~~~~");
const person5 = {
  firstName: "Patricia",
  lastName: "Mamani",
  //   fullName() {
  //     return this.firstName + " " + this.lastName;
  //   },
  get fullName() {
    return `${this.firsName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" "); // using destructuring
  },
};

person.fullName = "Jose Perez";
console.log("person5:", person5);

// another example for private properties
const p = {
  _username: "Web Dev Simplified",
  get username() {
    return this._username;
  },
  set username(username) {
    if (username.length > 5) {
      this._username = username;
    }
  },
};

// set
p.username = "Patricia";
// get
console.log("get username:", p.username);

// Bind
