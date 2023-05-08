  const person = {
    name: 'Alice',
    sayName: () => {
      console.log(this);
      console.log(this.name);
    },
  };

  person.sayName(); 