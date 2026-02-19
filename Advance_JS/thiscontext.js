const person={
  name:"shuvaraj",
  greet(){
    console.log(`hi, i am ${this.name}`);
  },
};

person.greet();

const greetFunction=person.greet;
greetFunction();

const boundGerrt=person.greet.bind({name:"shuva"});
boundGerrt();