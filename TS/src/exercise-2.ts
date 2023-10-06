//Manca il tipo "Persona", per favore definiscilo e usalo nell'array di persone 
// e nella funzione logPerson per risolvere il problema tutti gli errori TS.

interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

// UNION
// deve poter accettare sia User che Admin
// una persona può essere User o Admin
export type Person = User | Admin;

// le persone sono un array di Person
export const persons: Person[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  }
];

function logPerson(person: Person): void {
  console.log(person);
}

logPerson(persons[2]);// {name: 'Kate Müller', age: 23, occupation: 'Astronaut'}