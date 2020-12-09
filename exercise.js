// ES2015 Version - same keys and value
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

// ES2015 Version - Computed Property Names
let favoriteNumber = 42;

const instructor = {
  firstName: 'Colt',
  [favoriteNumber]: `That is my favorite!`,
};

// ES2015 Version - Object Methods
const instructor = {
  firstName: 'Colt',
  sayHi() {
    return 'Hi!';
  },
  sayBye() {
    return `${this.firstName} says bye!`;
  },
};

// createAnimal Function
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}
