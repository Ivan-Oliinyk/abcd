const person = Object.create(
  {
    calculateAge() {
      console.log("Age (calculate) =>", new Date().getFullYear() - this.birthYear)
      enumerable: false
    }
  },

  {
    name: {
      value: 'Ivan',
      enumerable: true
    },

    birthYear : {
      value: 1991, 
      enumerable: true,
      configurable: true
    },

    age: {
      get() {
        return new Date().getFullYear() - this.birthYear
      },
  
      set(value) {
        console.log('Set age => ', value)
      }
    }
  }
)

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log("key in PErson => ", person[key]);
  }
}

console.log(person.age);

person.age = "Hop"

person.calculateAge()

// delete person.birthYear

console.log(person);