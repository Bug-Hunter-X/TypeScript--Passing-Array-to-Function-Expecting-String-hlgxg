function greeter(person: string) {
    return "Hello, " + person;
}

function greeterArray(person: string[]) {
  return "Hello, " + person.join(' ');
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); //Correct usage

let userString = user.join(" ");
console.log(greeter(userString)); // Correct usage